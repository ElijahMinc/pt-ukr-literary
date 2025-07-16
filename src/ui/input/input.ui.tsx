import cn from 'classnames';
import './input.scss';

type InputProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  isError?: boolean;
  className?: string;
};

export const Input = <T extends React.ElementType = 'input'>({
  as,
  isError = false,
  className,
  ...props
}: InputProps<T>) => {
  const Component = as || 'input';

  return (
    <Component
      className={cn('input', className, {
        error: isError,
      })}
      {...props}
    />
  );
};
