import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';


const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-[var(--red)] text-[var(--white)] border border-[var(--red)] hover:bg-[var(--red-light)]',
        outline: 'border border-[var(--border-2)] text-[var(--white)] hover:border-[var(--steel-light)] hover:bg-[rgba(44,74,124,0.15)]',
        ghost: 'text-[var(--muted)] hover:text-[var(--white)] hover:bg-[var(--surface)]',
        link: 'text-[var(--steel-light)] underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        default: 'h-10 px-5 py-2',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-12 px-8 text-base',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = 'Button';

export { Button, buttonVariants };
