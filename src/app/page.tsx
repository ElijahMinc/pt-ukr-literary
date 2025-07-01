import { Card } from '@/components/card/card.ui';
import styles from './page.module.css';
import { Section } from '@/widgets/section/section.ui';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.page}>
      <Section
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
            <div
              style={{
                display: 'flex',
                gap: '10px',
                marginTop: '10px',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
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
              }}
              title='Live Poetry Readings'
              description={
                <p>
                  Let poets guide you into their worlds — one verse at a time. Each poem is a door;
                  each voice, a key. Some will read the words of beloved authors, others will bare
                  their own souls. Languages may vary — Portuguese, Ukrainian, or Brazilian
                  Portuguese — but the emotion is universal. Whether whispered softly or declared
                  with passion, every poem becomes a bridge: between people, cultures, and quiet
                  corners of the self. Come to listen. Come to feel. And if your heart compels you —
                  come to speak.
                </p>
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
