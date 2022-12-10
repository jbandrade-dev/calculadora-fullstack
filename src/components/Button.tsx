import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ButtonProps } from './constType';


export function Button({ children, asChild, className, ...props }: ButtonProps) {
  const Components = asChild ? Slot : 'button';

  return (
    <Components 
      className={clsx(
        'py-3 px-4 rounded font-bold tracking-wider text-gray-100 text-sm w-full transition-colors hover:bg-purple-800',
        className,
      )}
      {...props}
    >
      {children}
    </Components>
  )
}