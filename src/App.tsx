import { Button } from './components/Button';
import { Header } from './components/Header';

import python from './assets/python.svg';
import aws from './assets/aws.svg';
import serverless from './assets/serverless.svg';
import javascript from './assets/javascript.svg';
import tailwindcss from './assets/tailwindcss.svg';
import react from './assets/react.svg';
import angular from './assets/angular.svg';

import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { SocialLinks } from './components/SocialLinks';

function App() {
  return (
    <>
      <Header />

      <main className="my-16 space-y-15 text-zinc-800">
        <div className="mx-8 lg:mx-16 max-w-3xl space-y-4">
          <div className="flex gap-3">
            <img src={python} alt="Python" />
            <img src={aws} alt="AWS" />
            <img src={serverless} alt="Serverless" />
            <img src={javascript} alt="JavaScript" />
            <img src={tailwindcss} alt="Tailwind CSS" />
            <img src={react} alt="React" />
            <img src={angular} alt="Angular" />
          </div>

          <h1 className="text-5xl font-display">Full-stack Web & Serverless Developer</h1>

          <div className="flex gap-4">
            <Button>Baixar CV</Button>
            <Button variant="secondary">Entrar em contato</Button>
          </div>
        </div>

        <section className="px-8 lg:px-16 bg-zinc-50 py-6 space-y-6">
          <h2 className="relative text-3xl font-bold before:content-['#'] before:absolute before:left-[-1.5rem] before:top-1/2 before:-translate-y-1/2 before:text-yellow-300 before:text-2xl">
            Sobre
          </h2>

          <div className="flex flex-col lg:flex-row items-start gap-16">
            <article className="bg-white px-5 py-4 min-w-96 max-w-lg shadow-sm rounded-md">
              <h3 className="text-xl font-bold mb-4 flex items-baseline gap-1">
                <span className="block h-1 w-2 bg-zinc-300"></span>
                Quem sou eu?
              </h3>
              <p className="mb-6">
                Sou desenvolvedor web full-stack, com noções de UI/UX. Atuo majoritariamente com AWS e construção de
                aplicações serverless.
              </p>
              <Button>Entrar em contato</Button>
            </article>

            <article className="bg-white px-5 py-4 min-w-96 max-w-lg shadow-sm rounded-md">
              <h3 className="text-xl font-bold mb-4 flex items-baseline gap-1">
                <span className="block h-1 w-2 bg-zinc-300"></span>
                Educação
              </h3>
              <h4 className="font-semibold">2025</h4>
              <ul>
                <li>
                  <a
                    href="https://www.credly.com/badges/f628a487-242d-4605-9872-221ee95058ce"
                    target="_blank"
                    className="flex items-center justify-between text-sm"
                  >
                    AWS Certified Solutions Architect - Associate
                    <ExternalLinkIcon className="text-yellow-300 hover:text-yellow-400" />
                  </a>
                </li>
              </ul>
            </article>
          </div>
        </section>
      </main>

      <footer className="bg-zinc-800 text-zinc-50 text-center space-y-4 py-16">
        <p>
          Kauê Leal de Lima © 2022 - 2025. <i>Alguns direitos reservados</i>
        </p>
        <SocialLinks />
      </footer>
    </>
  );
}

export default App;
