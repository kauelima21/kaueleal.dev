import * as Dialog from '@radix-ui/react-dialog';

import { Cross2Icon } from '@radix-ui/react-icons';
import { Form } from '../Form';
import { Button } from '../Button';

import python from '../../assets/python.svg';
import aws from '../../assets/aws.svg';
import serverless from '../../assets/serverless.svg';
import javascript from '../../assets/javascript.svg';
import tailwindcss from '../../assets/tailwindcss.svg';
import react from '../../assets/react.svg';
import angular from '../../assets/angular.svg';

export function Presentation() {
  return (
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
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button variant="secondary">Entrar em contato</Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50" />
            <Dialog.Content className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-4 md:p-8 w-full max-w-md focus:outline-none">
              <Dialog.Close asChild>
                <button
                  className="cursor-pointer absolute top-4 right-4 text-zinc-500 hover:text-zinc-800 focus:outline-none"
                  aria-label="Fechar"
                >
                  <Cross2Icon className="w-5 h-5" />
                </button>
              </Dialog.Close>
              <Form />
              <Dialog.Title className="sr-only">Formulário de contato</Dialog.Title>
              <Dialog.Description className="sr-only">Formulário de contato</Dialog.Description>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  );
}
