import { Logo } from '../Logo';
import { SocialLinks } from '../SocialLinks';

export function Header() {
  return (
    <header className="flex items-center justify-between py-6 px-16 shadow-sm text-zinc-800">
      <Logo />

      <nav>
        <ul className="flex items-center gap-1">
          <li>
            <a href="" className="py-1.5 px-3 text-zinc-700 hover:bg-zinc-100 hover:border-zinc-50 rounded-md">
              Sobre
            </a>
          </li>
          <li>
            <a href="" className="py-1.5 px-3 text-zinc-700 hover:bg-zinc-100 hover:border-zinc-50 rounded-md">
              Projetos
            </a>
          </li>
          <li>
            <a href="" className="py-1.5 px-3 text-zinc-700 hover:bg-zinc-100 hover:border-zinc-50 rounded-md">
              Blog
            </a>
          </li>
        </ul>
      </nav>

      <SocialLinks />
    </header>
  );
}
