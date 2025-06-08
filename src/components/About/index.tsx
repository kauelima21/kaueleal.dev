import { Cross2Icon, ExternalLinkIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { Button } from '../Button';
import * as Dialog from '@radix-ui/react-dialog';
import { Form } from '../Form';

export function About() {
  const [qualifications] = useState([
    {
      year: 2025,
      certifications: [
        {
          name: 'AWS Certified Solutions Architect - Associate',
          link: 'https://www.credly.com/badges/f628a487-242d-4605-9872-221ee95058ce',
        },
      ],
    },
    {
      year: 2024,
      certifications: [
        {
          name: 'AWS Knowledge: Serverless',
          link: 'https://www.credly.com/badges/11878cca-7ab2-4efc-9d95-85db5dd86392',
        },
        {
          name: 'AWS Knowledge: Cloud Essentials',
          link: 'https://www.credly.com/badges/3e55f598-0575-43cd-b7b4-1e93f1554585',
        },
      ],
    },
  ]);

  return (
    <div className="flex flex-col lg:flex-row items-start gap-16">
      <article className="bg-white px-5 py-4 max-w-lg shadow-sm rounded-md">
        <h3 className="text-xl font-bold mb-4 flex items-baseline gap-1">
          <span className="block h-1 w-2 bg-zinc-300"></span>
          Quem sou eu?
        </h3>
        <div className="space-y-2 mb-6 text-md">
          <p>
            Sou desenvolvedor Full Stack com forte atuação em arquitetura Serverless na{' '}
            <a href="https://aws.amazon.com/" target="_blank" className="font-medium marked">
              AWS
            </a>
            . Tenho experiência sólida com Angular no Front-end e Python no Back-end, utilizando serviços como Lambda,
            DynamoDB, API Gateway e Step Functions.
          </p>
          <p>
            Atuo em ambientes de Cloud Computing, sempre seguindo boas práticas de desenvolvimento e colaborando com
            times ágeis. Tenho conhecimento em pipelines de CI/CD e já trabalhei com ferramentas como{' '}
            <a href="https://github.com/features/actions" target="_blank" className="font-medium marked">
              GitHub Actions
            </a>
            para automação de deploys. Também possuo experiência com infraestrutura como código (IaC), especialmente
            utilizando o{' '}
            <a href="https://www.serverless.com/" target="_blank" className="font-medium marked">
              Serverless Framework
            </a>
            .
          </p>
          <p>
            Sou movido por desafios e tenho um perfil analítico, com raciocínio lógico apurado e foco em resolver
            problemas de forma eficiente e prática.
          </p>
        </div>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button>Entrar em contato</Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50" />
            <Dialog.Content className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-8 w-full max-w-md focus:outline-none">
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
      </article>

      <article className="bg-white px-5 py-4 max-w-lg shadow-sm rounded-md">
        <h3 className="text-xl font-bold mb-4 flex items-baseline gap-1">
          <span className="block h-1 w-2 bg-zinc-300"></span>
          Educação
        </h3>
        <div className="space-y-4">
          {qualifications.map((qualification, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-2">{qualification.year}</h4>
              <ul className="space-y-2">
                {qualification.certifications.map((certification, index) => (
                  <li key={index}>
                    <a
                      href={certification.link}
                      target="_blank"
                      className="flex items-center gap-4 justify-between text-sm"
                    >
                      {certification.name}
                      <ExternalLinkIcon className="text-yellow-300 hover:text-yellow-400" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
