'use client'

import { SectionTitle } from '@/components/section-title'
import { KnownTech } from './known-tech'
import { motion } from 'framer-motion'
import { KnownTech as IKnownTech } from '@/types/projects'
import { knownTechsAnimation } from '@/lib/animations'

type KnownTechsProps = {
  techs: IKnownTech[]
}

export const KnownTechs = ({ techs }: KnownTechsProps) => {
  // Ordena as tecnologias pela data de início (startDate) em ordem crescente
  const sortedTechs = [...techs].sort((a, b) => {
    const startA = new Date(a.startDate).getTime();
    const startB = new Date(b.startDate).getTime();
    return startA - startB; // Ordenação crescente, tecnologias mais antigas primeiro
  });

  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {sortedTechs?.map((tech, i) => (
          <motion.div
            key={tech.name}
            {...knownTechsAnimation}
            transition={{ duration: 0.15, delay: i * 0.1 }}
          >
            <KnownTech tech={tech} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
