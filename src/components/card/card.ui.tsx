import './card.scss';
import cn from 'classnames';

interface ICardProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string;
  description?: string | React.ReactNode;
  appearance?: 'primary' | 'secondary';

  //   asLink?: boolean;
}

export const Card = ({
  title,
  description,
  className,
  children,
  appearance = 'primary',
  ...rest
}: ICardProps) => {
  return (
    <div
      className={cn('card', className, {
        primary: appearance === 'primary',
        secondary: appearance === 'secondary',
      })}
      {...rest}
    >
      {title && <h3 className='card__title'>{title}</h3>}
      {description && <div className='card__description'>{description}</div>}
      {children && children}
    </div>
  );
};
