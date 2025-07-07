import Image from 'next/image';
import './artist.scss';

interface IArtist {
  imageUrl: string;
  title: string;
}

export const Artist: React.FC<IArtist> = ({ imageUrl, title }) => {
  return (
    <div className='artist-card'>
      {/* <div className='artist-card__list'>
         <div className="artist-card__item">

         </div> */}
      <div className='artist-card__image'>
        <Image src={imageUrl} fill objectFit='cover' alt={title} />
      </div>
      <div className='artist-card__title'>{title}</div>
      {/* </div> */}
    </div>
  );
};
