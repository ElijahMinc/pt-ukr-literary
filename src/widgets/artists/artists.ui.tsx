/* eslint-disable @typescript-eslint/no-explicit-any */
import { Artist } from '@/components/artist/artist.ui';
import client from '@/services/contentful';
import { EntrySkeletonType } from 'contentful';
import { IArtistsFields } from '@/types/contentful';

import './artists.scss';
import { getContentfulImageData } from '@/services/contentful/helpers/getImageData';

export const ArtistsWidget = async () => {
  const artistsSectionData = await client.getEntries<EntrySkeletonType<IArtistsFields>>({
    content_type: 'artists',
    limit: 4,
  });

  const [artistsSection] = artistsSectionData.items;

  const artistsData = artistsSection?.fields;

  const artistsTitle = artistsData.artists;

  const photos = artistsData.artistsPhotos as any[];

  return (
    <section id='artists' className='section-artists'>
      <h3 className='section-artists__title'>{artistsTitle}</h3>
      <div className='section-artists__list'>
        {photos.map((data: any) => {
          const imageUrl = getContentfulImageData(data, { image: true });
          const imageTitle = getContentfulImageData(data, { title: true });
          console.log('imageUrl', imageUrl);
          return <Artist key={imageUrl} imageUrl={`https:${imageUrl}`} title={imageTitle || ''} />;
        })}
      </div>
    </section>
  );
};
