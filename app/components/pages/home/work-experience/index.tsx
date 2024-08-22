import { SectionTitle } from '@/components/section-title'
import { ExperienceItem } from './experience-item'

export const WorkExperience = () => {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="experiências"
          title="Experiência Profissional"
        />
        <p className="text-gray-400 mt-6">
          Profissional experiente em análise e desenvolvimento de sistemas, com
          forte enfoque em soluções educacionais para instituições de grande
          porte. Especializado em tecnologias modernas de programação e
          frameworks, com habilidade comprovada em transformar requisitos
          complexos em soluções eficazes e eficientes. Habilidoso em trabalhar
          com metodologias ágeis e práticas de DevOps, destacando-se na
          implementação de melhorias significativas em plataformas de ensino.
          Adepto da aprendizagem contínua, busca continuamente aprimorar
          habilidades técnicas e interpessoais para impulsionar inovação e
          eficiência.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <ExperienceItem />
      </div>
    </section>
  )
}
