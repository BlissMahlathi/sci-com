import * as React from 'react';
import { cva } from 'class-variance-authority';


const badgeVariants = cva(
  'inline-flex items-center rounded px-2.5 py-0.5 text-xs font-semibold uppercase tracking-widest transition-colors border',
  {
    variants: {
      variant: {
        default: 'border-[var(--border-2)] text-[var(--muted)]',
        accent: 'border-[var(--red-muted)] text-[var(--red-light)]',
        steel: 'border-[var(--steel)] text-[var(--steel-light)]',
        gold: 'border-[var(--gold)] text-[var(--gold)]',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

const Badge = React.forwardRef(({ className, variant, ...props }, ref) => (
  <span ref={ref} className={(badgeVariants({ variant }), className)} {...props} />
));
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
