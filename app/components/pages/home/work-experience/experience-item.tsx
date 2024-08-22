import { TechBadge } from '@/components/tech-badge'
import Image from 'next/image'

export const ExperienceItem = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src="/images/unifatecie-logo.png"
            width={40}
            height={40}
            className="rounded-full"
            alt="Logo unifatecie"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800"></div>
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href="https://www.linkedin.com/school/unifatecie/"
            target="_blank"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
            rel="noreferrer"
          >
            @ Unifatecie
          </a>
          <h4 className="text-gray-300">Analista de Sistema Full-Stack</h4>
          <span className="text-gray-500">
            Setembro 2023 - Fevereiro 2024 (5 meses)
          </span>
          <p className="text-gray-400">
            Desenvolvimento e prototipação de sistemas educacionais para uma
            instituição de Ensino Superior com mais de 200.000 alunos em todo o
            Brasil. Estive envolvido na implementação de melhorias em uma
            plataforma de Cursos Livres, com foco na reescrita do Backend de
            NextJS para Java 17 com Spring, resultando em um aumento
            significativo no desempenho e na escalabilidade do sistema. Além
            disso, colaborei ativamente na melhoria da usabilidade do Frontend e
            na criação de novas telas, impactando positivamente a experiência do
            usuário e aumentando o nível de recursos na plataforma.
          </p>
        </div>

        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          <TechBadge name="React" />
          <TechBadge name="Nextjs" />
          <TechBadge name="TypeScript" />
          <TechBadge name="SQL Server" />
          <TechBadge name="Java" />
          <TechBadge name="Spring Boot" />
        </div>
      </div>
    </div>
  )
}
