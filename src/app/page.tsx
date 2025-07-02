import { Card } from '@/components/card/card.ui';
import { Section } from '@/widgets/section/section.ui';
import Image from 'next/image';

import './page.scss';

export default function Home() {
  return (
    <div className='page'>
      <Section
        className='section-first'
        Content={
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Card
              style={{
                maxWidth: '700px',
              }}
              title='STEP INTO A NIGHT OF LIVING POETRY'
              description='On July 12th at 20:00, Rua Antero de Quental, 89 — words will bloom in the air.
Let yourself be carried away by verses whispered in Portuguese, Ukrainian, and Brazilian voices.
An evening to awaken memories, cross cultures, and let poetry speak in all its forms.'
            />
            <div className='step-into-content'>
              <Image
                width={350}
                height={101}
                src='/first-section-img2.png'
                alt='first section img2'
                style={{
                  borderRadius: '10px',
                }}
              />
              <Card
                description={
                  <span
                    style={{
                      fontSize: '16px',
                      color: 'white',
                      maxWidth: '290px',
                    }}
                  >
                    One night. Many voices. Infinite echoes.
                  </span>
                }
              />
            </div>
          </div>
        }
        Image={
          <Image
            width={580}
            height={300}
            style={{
              borderRadius: '10px',
            }}
            src='/first-section-img.png'
            alt='first section img'
          />
        }
      />

      <Section
        id='experiences'
        reverseContent
        title='EXPERIENCES'
        style={{
          marginTop: '20px',
        }}
        className='section-second'
        Content={
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Card
              style={{
                maxWidth: '750px',
                // width: '750px',
              }}
              title='Live Poetry Readings'
              description={
                <>
                  <span
                    style={{
                      display: 'block',
                      maxWidth: '550px',
                    }}
                  >
                    Let poets guide you into their worlds — one verse at a time. Each poem is a
                    door; each voice, a key. Some will read the words of beloved authors, others
                    will bare their own souls.
                  </span>
                  <br />

                  <span
                    style={{
                      display: 'block',
                      maxWidth: '550px',
                    }}
                  >
                    Languages may vary — Portuguese, Ukrainian, or Brazilian Portuguese — but the
                    emotion is universal.
                  </span>
                  <br />

                  <span
                    style={{
                      display: 'block',
                      maxWidth: '450px',
                    }}
                  >
                    Whether whispered softly or declared with passion, every poem becomes a bridge:
                    between people, cultures, and quiet corners of the self. Come to listen. Come to
                    feel.
                  </span>
                </>
              }
            />
          </div>
        }
        Image={
          <Image
            width={315}
            height={345}
            style={{
              borderRadius: '10px',
            }}
            src='/second-section-img.png'
            alt='second section img'
          />
        }
      />
    </div>
  );
}
