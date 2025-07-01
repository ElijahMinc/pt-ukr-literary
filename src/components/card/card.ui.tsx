import styles from './card.module.css';
import cn from 'classnames';

interface ICardProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string;
  description?: string | React.ReactNode;

  //   asLink?: boolean;
}

export const Card = ({ title, description, className, ...rest }: ICardProps) => {
  return (
    <div className={cn(styles.card, className)} {...rest}>
      {title && <h3 className={styles.card__title}>{title}</h3>}
      {description && <p className={styles.card__description}>{description}</p>}
    </div>
  );
};
