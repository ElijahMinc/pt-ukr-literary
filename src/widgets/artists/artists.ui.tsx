import { Artist } from '@/components/artist/artist.ui';
import './artists.scss';

export const ArtistsWidget = () => {
  return (
    <section id='artists' className='section-artists'>
      <h3 className='section-artists__title'>Artists</h3>
      <div className='section-artists__list'>
        <Artist imageUrl='/artists-first-img.png' title='Leonardo da Vinci' />
        <Artist imageUrl='/artists-first-img.png' title='Leonardo da Vinci' />
        <Artist imageUrl='/artists-first-img.png' title='Leonardo da Vinci' />
        <Artist imageUrl='/artists-first-img.png' title='Leonardo da Vinci' />
        <Artist imageUrl='/artists-first-img.png' title='Leonardo da Vinci' />
      </div>
    </section>
  );
};
