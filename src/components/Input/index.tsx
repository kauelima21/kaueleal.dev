import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
  return <input {...props} className="py-2 px-4 boder-zinc-100 bg-zinc-50 outline-yellow-400 rounded-sm" />;
}
