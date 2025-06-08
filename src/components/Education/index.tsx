import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

export function Education() {
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
    <section id="education" className="scroll-mt-20 px-8 lg:px-16 py-6 space-y-6">
      <h2 className="relative text-3xl font-bold before:content-['#'] before:absolute before:left-[-1.5rem] before:top-1/2 before:-translate-y-1/2 before:text-yellow-300 before:text-2xl">
        Educação
      </h2>
      <article className="bg-white px-5 py-4 max-w-max shadow-sm rounded-md">
        <h3 className="text-xl font-bold mb-4 flex items-baseline gap-1">
          <span className="block h-1 w-2 bg-zinc-300"></span>
          Certificações e Badges
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
                      <ExternalLinkIcon className="text-yellow-500" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
