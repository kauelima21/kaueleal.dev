import { twMerge } from 'tailwind-merge';

interface MenuItemsProps {
  orientation?: 'horizontal' | 'vertical';
}

export function MenuItems({ orientation = 'horizontal' }: MenuItemsProps) {
  return (
    <nav>
      <ul className={twMerge('flex items-center gap-1', orientation === 'vertical' && 'flex-col gap-4')}>
        <li>
          <a href="#about" className="py-1.5 px-3 text-zinc-700 hover:bg-zinc-100 hover:border-zinc-50 rounded-md">
            Sobre
          </a>
        </li>
        {/* <li>
          <a href="#projects" className="py-1.5 px-3 text-zinc-700 hover:bg-zinc-100 hover:border-zinc-50 rounded-md">
            Projetos
          </a>
        </li>
        <li>
          <a href="" className="py-1.5 px-3 text-zinc-700 hover:bg-zinc-100 hover:border-zinc-50 rounded-md">
            Blog
          </a>
        </li> */}
      </ul>
    </nav>
  );
}
