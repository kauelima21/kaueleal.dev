import { SocialLinks } from '../SocialLinks';

export function Footer() {
  return (
    <footer className="bg-zinc-800 text-zinc-50 text-center space-y-4 py-16">
      <p>
        Kauê Leal de Lima © 2022 - 2025. <br className="md:hidden" /> <i>Alguns direitos reservados</i>
      </p>
      <SocialLinks />
    </footer>
  );
}
