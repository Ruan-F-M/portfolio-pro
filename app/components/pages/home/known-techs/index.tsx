import { SectionTitle } from '@/components/section-title'
import { KnownTech } from './known-tech'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaJava, FaReact, FaCss3Alt, FaHtml5 } from 'react-icons/fa'
import {
  SiTypescript,
  SiSpringboot,
  SiMicrosoftsqlserver,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
} from 'react-icons/si'

export const technologies = [
  { name: 'Next.js', icon: <TbBrandNextjs />, startDate: '2023-09-01' },
  { name: 'Java', icon: <FaJava />, startDate: '2023-09-01' },
  { name: 'React', icon: <FaReact />, startDate: '2023-09-01' },
  { name: 'TypeScript', icon: <SiTypescript />, startDate: '2023-09-01' },
  { name: 'Spring Boot', icon: <SiSpringboot />, startDate: '2023-09-01' },
  { name: 'SQL Server', icon: <SiMicrosoftsqlserver />, startDate: '2023-09-01' },
  { name: 'MySQL', icon: <SiMysql />, startDate: '2023-09-01' },
  { name: 'JavaScript', icon: <SiJavascript />, startDate: '2023-09-01' },
  { name: 'CSS', icon: <FaCss3Alt />, startDate: '2023-09-01' },
  { name: 'HTML', icon: <FaHtml5 />, startDate: '2023-09-01' },
  { name: 'Tailwind', icon: <SiTailwindcss />, startDate: '2023-09-01' },
  { name: 'Bootstrap', icon: <SiBootstrap />, startDate: '2023-09-01' },
]

export const KnownTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {technologies.map((tech, index) => (
          <KnownTech
            key={index}
            tech={tech}
          />
        ))}
      </div>
    </section>
  )
}
