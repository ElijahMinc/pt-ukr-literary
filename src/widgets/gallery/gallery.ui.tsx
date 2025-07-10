/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { GalleryCard } from '@/components/gallery-card/gallery-card.ui';
import './gallery.scss';
import client from '@/services/contentful';
import { EntrySkeletonType } from 'contentful';
import { IGalleryFields } from '@/types/contentful';
import { getContentfulImageData } from '@/services/contentful/helpers/getImageData';

export const GalleryWidget = async () => {
  const gallerySectionData = await client.getEntries<EntrySkeletonType<IGalleryFields>>({
    content_type: 'gallery',
    limit: 5,
  });

  const [gallerySection] = gallerySectionData.items;

  const galleryData = gallerySection?.fields;

  const galleryTitle = galleryData.Title;

  const gallery = galleryData.gallery as any[];

  return (
    <section id='gallery' className='section-gallery'>
      <h3 className='section-gallery__title'>{galleryTitle}</h3>
      <div className='section-gallery__list'>
        {gallery.map((data: any) => {
          const imageUrl = getContentfulImageData(data, { image: true });
          const imageTitle = getContentfulImageData(data, { title: true });

          return (
            <GalleryCard
              key={imageUrl}
              imageUrl={`https:${imageUrl}`}
              altTitle={imageTitle || ''}
              url='/gallery'
              urlButtonText='Show more'
              withHover
            />
          );
        })}
      </div>
    </section>
  );
};
