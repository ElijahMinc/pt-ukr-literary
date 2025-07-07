import { GalleryCard } from '@/components/gallery-card/gallery-card.ui';
import './gallery.scss';

export const GalleryWidget = () => {
  return (
    <section id='gallery' className='section-gallery'>
      <h3 className='section-gallery__title'>Gallery</h3>
      <div className='section-gallery__list'>
        <GalleryCard
          imageUrl='/gallery-first-img.png'
          altTitle='Leonardo da Vinci'
          url='/gallery'
          urlButtonText='Show more'
          withHover
        />
        <GalleryCard
          imageUrl='/gallery-first-img.png'
          altTitle='Leonardo da Vinci'
          url='/gallery'
          urlButtonText='Show more'
          withHover
        />
        <GalleryCard
          imageUrl='/gallery-first-img.png'
          altTitle='Leonardo da Vinci'
          url='/gallery'
          urlButtonText='Show more'
          withHover
        />
        <GalleryCard
          imageUrl='/gallery-first-img.png'
          altTitle='Leonardo da Vinci'
          url='/gallery'
          urlButtonText='Show more'
          withHover
        />
        <GalleryCard
          imageUrl='/gallery-first-img.png'
          altTitle='Leonardo da Vinci'
          url='/gallery'
          urlButtonText='Show more'
          withHover
        />
      </div>
    </section>
  );
};
