import './card.scss';
import cn from 'classnames';

interface ICardProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string;
  description?: string | React.ReactNode;

  //   asLink?: boolean;
}

export const Card = ({ title, description, className, ...rest }: ICardProps) => {
  return (
    <div className={cn('card', className)} {...rest}>
      {title && <h3 className='card__title'>{title}</h3>}
      {description && <p className='card__description'>{description}</p>}
    </div>
  );
};
