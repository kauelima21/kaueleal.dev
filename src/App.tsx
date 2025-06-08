import { Button } from './components/Button';
import { Header } from './components/Header';

import python from './assets/python.svg';
import aws from './assets/aws.svg';
import serverless from './assets/serverless.svg';
import javascript from './assets/javascript.svg';
import tailwindcss from './assets/tailwindcss.svg';
import react from './assets/react.svg';
import angular from './assets/angular.svg';

import { Footer } from './components/Footer';
import { About } from './components/About';

function App() {
  return (
    <div id="home">
      <Header />

      <main className="my-16 space-y-15 text-zinc-800">
        <div className="mx-8 lg:mx-16 max-w-3xl">
          <div className="flex gap-3 mb-4">
            <img src={python} alt="Python" />
            <img src={aws} alt="AWS" />
            <img src={serverless} alt="Serverless" />
            <img src={javascript} alt="JavaScript" />
            <img src={tailwindcss} alt="Tailwind CSS" />
            <img src={react} alt="React" />
            <img src={angular} alt="Angular" />
          </div>

          <h1 className="text-5xl md:text-6xl font-display">Full Stack Web & Serverless Developer</h1>

          <div className="flex gap-4 mt-6">
            <a href="assets/Kaue Leal de Lima - CV.pdf" download>
              <Button>Baixar CV</Button>
            </a>
            <Button variant="secondary">Entrar em contato</Button>
          </div>
        </div>

        <section id="about" className="scroll-mt-20 px-8 lg:px-16 bg-zinc-50 py-6 space-y-6">
          <h2 className="relative text-3xl font-bold before:content-['#'] before:absolute before:left-[-1.5rem] before:top-1/2 before:-translate-y-1/2 before:text-yellow-300 before:text-2xl">
            Sobre
          </h2>

          <About />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
