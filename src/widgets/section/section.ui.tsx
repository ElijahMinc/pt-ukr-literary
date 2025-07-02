import './section.scss';
import cn from 'classnames';

interface ISectionProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  Content: React.ReactNode;
  Image: React.ReactNode;

  title?: string;
  reverseContent?: boolean;
  contentAttr?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

export const Section: React.FC<ISectionProps> = ({
  title,
  Image,
  Content,
  reverseContent,
  className,
  contentAttr,
  ...rest
}) => {
  return (
    <section className={cn('section', className)} {...rest}>
      {title && <h2 className='section__title'>{title}</h2>}
      <div
        className={cn('content', contentAttr?.className, {
          reversed: reverseContent,
        })}
        {...contentAttr}
      >
        <div className='content__block'>{Image}</div>
        <div className='content__block'>{Content}</div>
      </div>
    </section>
  );
};
