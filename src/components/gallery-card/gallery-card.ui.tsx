import { Button } from '@/ui/button/button.ui';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import './gallery-card.scss';

interface IGalleryCard {
  imageUrl: string;
  altTitle: string;

  withHover?: boolean;
  url?: string;
  urlButtonText?: string;
}

export const GalleryCard = ({
  imageUrl,
  altTitle,
  url,
  withHover,
  urlButtonText,
}: IGalleryCard) => {
  return (
    <div
      className={cn('gallery-card', {
        hover: withHover,
      })}
    >
      <Image src={imageUrl} fill objectFit='cover' alt={altTitle} />
      {url && (
        <Link href={url}>
          <Button
            style={{
              maxWidth: '151px',
            }}
            className='gallery-card__button'
          >
            {urlButtonText}
          </Button>
        </Link>
      )}
    </div>
  );
};
