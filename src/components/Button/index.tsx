import type { ButtonHTMLAttributes } from 'react';
import { tv } from 'tailwind-variants';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const buttonVariants = tv({
  base: 'py-2 px-4 rounded-md font-semibold text-sm cursor-pointer transition-all duration-300 shadow-sm',
  variants: {
    color: {
      primary: 'bg-linear-to-t from-yellow-300 to-yellow-400 text-yellow-900 border-yellow-300 hover:shadow-yellow-100',
      secondary: 'bg-zinc-50 text-zinc-700 border-zinc-100 hover:shadow-zinc-50',
    },
  },
});

export function Button({ variant = 'primary', ...props }: ButtonProps) {
  return <button {...props} className={buttonVariants({ color: variant })} />;
}
