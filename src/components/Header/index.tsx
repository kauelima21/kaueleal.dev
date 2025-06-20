import { RowsIcon, Cross2Icon } from '@radix-ui/react-icons';
import { Logo } from '../Logo';
import { SocialLinks } from '../SocialLinks';
import { MenuItems } from './MenuItems';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between py-4 lg:py-6 px-8 lg:px-16 shadow-sm text-zinc-800 sticky top-0 left-0 w-full bg-white z-50">
        <a href="#home">
          <Logo />
        </a>

        <div className="hidden md:block">
          <MenuItems />
        </div>

        <div className="flex items-center gap-4">
          <SocialLinks />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1.5 cursor-pointer text-zinc-700 hover:bg-zinc-50 rounded-md"
          >
            <RowsIcon className="w-4 h-4" />
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="grid place-items-center fixed inset-0 bg-zinc-900/50 z-10" onClick={() => setIsMenuOpen(false)}>
          <div className="bg-white min-w-36 w-max p-4 rounded-md">
            <div className="flex justify-end mb-4">
              <button
                className="cursor-pointer text-zinc-500 hover:text-zinc-800 focus:outline-none"
                aria-label="Fechar"
              >
                <Cross2Icon className="w-5 h-5" />
              </button>
            </div>
            <MenuItems orientation="vertical" />
          </div>
        </div>
      )}
    </>
  );
}
