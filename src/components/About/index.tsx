import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { Button } from '../Button';

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
        <div className="space-y-2 mb-6">
          <p>
            Sou desenvolvedor Full Stack com forte atuação em arquitetura Serverless na AWS. Tenho experiência sólida
            com Angular no Front-end e Python no Back-end, utilizando serviços como Lambda, DynamoDB, API Gateway e Step
            Functions.
          </p>
          <p>
            Atuo em ambientes de Cloud Computing, sempre seguindo boas práticas de desenvolvimento e colaborando com
            times ágeis. Tenho conhecimento em pipelines de CI/CD e já trabalhei com ferramentas como GitHub Actions
            para automação de deploys. Também possuo experiência com infraestrutura como código (IaC), especialmente
            utilizando o Serverless Framework.
          </p>
          <p>
            Sou movido por desafios e tenho um perfil analítico, com raciocínio lógico apurado e foco em resolver
            problemas de forma eficiente e prática.
          </p>
        </div>
        <Button>Entrar em contato</Button>
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
