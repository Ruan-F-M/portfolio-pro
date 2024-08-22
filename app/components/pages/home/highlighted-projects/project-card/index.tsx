import { Link } from '@/components/link'
import { TechBadge } from '@/components/tech-badge'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src="/images/inteligencia-artificial.png"
          alt="Thumbnail do projeto"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          Alexa-IoT
        </h3>

        <p className="text-gray-400 my-6">
          IoT & Machine Learning ministrado pela DIO Curso com os conceitos
          básicos introduzidos e a prática de um projeto do zero voltado a área
          de automação: IA Geral, IA Restrita, Machine Learning, Deep Learning,
          Estrutura RNA, Redes Neurais Biológicas, Redes Neurais Artificiais e
          Mnist Dataset
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="Python" />
        </div>

        <Link href="https://github.com/Ruan-F-M/Alexa-IoT" target="_blank">
          Ver Projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}
