import { SectionTitle } from '@/components/section-title'
import { ExperienceItem } from './experience-item'
import { WorkExperience as IWorkExperience } from '@/types/work-experience'

// Função para ordenar as experiências
const sortExperiences = (experiences: IWorkExperience[]) => {
  return experiences.sort((a, b) => {
    const endDateA = a.endDate ? new Date(a.endDate) : new Date();
    const endDateB = b.endDate ? new Date(b.endDate) : new Date();

    // Coloca experiências em andamento (sem endDate) no topo
    if (!a.endDate && b.endDate) return -1;
    if (a.endDate && !b.endDate) return 1;

    // Ordena pela endDate em ordem decrescente
    if (endDateA.getTime() !== endDateB.getTime()) {
      return endDateB.getTime() - endDateA.getTime();
    }

    // Se as endDates forem iguais, ordena pela startDate em ordem decrescente
    const startDateA = new Date(a.startDate);
    const startDateB = new Date(b.startDate);
    return startDateB.getTime() - startDateA.getTime();
  });
};

type WorkExperienceProps = {
  experiences: IWorkExperience[]
}

export const WorkExperience = ({ experiences }: WorkExperienceProps) => {
  const orderedExperiences = sortExperiences(experiences);
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
        {orderedExperiences.map(experience => (
          <ExperienceItem
            key={experience.companyName}
            experience={experience}
          />
        ))}
      </div>
    </section>
  )
}
