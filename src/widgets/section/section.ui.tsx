import React from 'react';
import styles from './section.module.css';
import cn from 'classnames';

interface ISectionProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  Content: React.ReactNode;
  Image: React.ReactNode;

  title?: string;
  reverseContent?: boolean;
}

export const Section: React.FC<ISectionProps> = ({
  title,
  Image,
  Content,
  reverseContent,
  className,
  ...rest
}) => {
  return (
    <section className={cn(styles.section, className)} {...rest}>
      {title && <h2 className={styles.section__title}>{title}</h2>}
      <div
        className={cn(styles.content, {
          [styles.reversed]: reverseContent,
        })}
      >
        <div className={styles.content__block}>{Image}</div>
        <div className={styles.content__block}>{Content}</div>
      </div>
    </section>
  );
};
