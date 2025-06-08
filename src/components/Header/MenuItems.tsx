import { twMerge } from 'tailwind-merge';
import { useEffect, useState } from 'react';

interface MenuItemsProps {
  orientation?: 'horizontal' | 'vertical';
}

export function MenuItems({ orientation = 'horizontal' }: MenuItemsProps) {
  const [activeHash, setActiveHash] = useState<string>(window.location.hash || '#about');

  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash || '#home');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <nav>
      <ul className={twMerge('flex items-center gap-1', orientation === 'vertical' && 'flex-col gap-4')}>
        <li>
          <a
            href="#about"
            className={twMerge(
              'py-1.5 px-3 text-zinc-700 hover:bg-zinc-100 hover:border-zinc-50 rounded-md',
              activeHash === '#about' && 'bg-zinc-100'
            )}
          >
            Sobre
          </a>
        </li>
        <li>
          <a
            href="#education"
            className={twMerge(
              'py-1.5 px-3 text-zinc-700 hover:bg-zinc-100 hover:border-zinc-50 rounded-md',
              activeHash === '#education' && 'bg-zinc-100'
            )}
          >
            Educação
          </a>
        </li>
        {/* <li>
          <a href="" className="py-1.5 px-3 text-zinc-700 hover:bg-zinc-100 hover:border-zinc-50 rounded-md">
            Blog
          </a>
        </li> */}
      </ul>
    </nav>
  );
}
