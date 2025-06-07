import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

export function SocialLinks() {
  return (
    <ul className="flex items-center gap-3 justify-center">
      <li>
        <a href="https://github.com/kauelima21" target="_blank">
          <GitHubLogoIcon className="size-4" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/kau%C3%AA-leal-de-lima-171a73247/" target="_blank">
          <LinkedInLogoIcon className="size-4" />
        </a>
      </li>
    </ul>
  );
}
