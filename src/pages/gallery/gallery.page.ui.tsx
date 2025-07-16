/* eslint-disable @typescript-eslint/no-explicit-any */
import { GalleryCard } from '@/components/gallery-card/gallery-card.ui';
import client from '@/services/contentful';
import { getContentfulImageData } from '@/services/contentful/helpers/getImageData';
import { IGalleryFields } from '@/types/contentful';
import { EntrySkeletonType } from 'contentful';
import './gallery.page.scss';

const GalleryPage = async () => {
  const gallerySectionData = await client.getEntries<EntrySkeletonType<IGalleryFields>>({
    content_type: 'gallery',
  });

  const [gallerySection] = gallerySectionData.items;

  const galleryData = gallerySection?.fields;

  const galleryTitle = galleryData.Title;

  const gallery = galleryData.gallery as any[];

  return (
    <div className='gallery-page'>
      <h3 className='gallery-page__title'>{galleryTitle}</h3>
      <div className='gallery-page__list'>
        {gallery.map((data: any) => {
          const imageUrl = getContentfulImageData(data, { image: true });
          const imageTitle = getContentfulImageData(data, { title: true });

          return (
            <GalleryCard
              key={imageUrl}
              imageUrl={`https:${imageUrl}`}
              altTitle={imageTitle || ''}
              withHover={false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GalleryPage;
