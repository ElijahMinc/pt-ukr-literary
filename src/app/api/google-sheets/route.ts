import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

type SheetForm = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  message: string;
};

export async function POST(req: NextRequest) {
  const body = (await req.json()) as SheetForm;

  console.log('body', process.env);
  try {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    if (!process.env.GOOGLE_SHEET_ID) {
      throw new Error('No GOOGLE_SHEED_ID');
    }

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'FirstEvent!A1:D1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[body.name, body.surname, body.email, body.phone, body.message]],
      },
    });

    return NextResponse.json({ message: 'Success', data: response.data }, { status: 200 });
  } catch (err) {
    console.log('err', err);
    return NextResponse.json({ message: 'Error revalidating', error: err }, { status: 500 });
  }
}
