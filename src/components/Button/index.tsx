import type { ButtonHTMLAttributes } from 'react';
import { tv } from 'tailwind-variants';
import { ReloadIcon } from '@radix-ui/react-icons';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
}

const buttonVariants = tv({
  base: 'grid place-items-center py-2 px-5 rounded-md font-semibold text-md cursor-pointer transition-all duration-300 shadow-sm',
  variants: {
    color: {
      primary: 'bg-linear-to-t from-yellow-300 to-yellow-400 text-yellow-900 border-yellow-300 hover:shadow-yellow-100',
      secondary: 'bg-zinc-50 text-zinc-700 border-zinc-100 hover:shadow-zinc-50',
    },
  },
});

export function Button({ variant = 'primary', isLoading = false, ...props }: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({ color: variant })} disabled={isLoading}>
      {isLoading ? <ReloadIcon className="w-5 h-5 animate-spin" /> : props.children}
    </button>
  );
}
