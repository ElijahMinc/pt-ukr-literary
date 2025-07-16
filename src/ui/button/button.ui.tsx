import cn from 'classnames';
import './button.scss';

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearance?: 'primary' | 'secondary' | 'default';
  icon?: React.ReactNode;
  iconLeft?: boolean;
}

export const Button = ({
  appearance = 'primary',
  icon,
  className,
  children,
  iconLeft = false,
  ...restProps
}: React.PropsWithChildren<IButtonProps>) => {
  return (
    <button
      className={cn('button', className, {
        primary: appearance === 'primary',
        secondary: appearance === 'secondary',
        default: appearance === 'default',
        ['left-icon']: iconLeft,
      })}
      {...restProps}
    >
      {children}
      {!!icon && <div className='icon'>{icon}</div>}
    </button>
  );
};
