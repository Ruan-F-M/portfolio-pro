'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { sectionTitleAnimation } from '@/lib/animations'

type SectionTitleProps = {
  subtitle: string
  title: string
  className?: string
}

export const SectionTitle = ({
  subtitle,
  title,
  className,
}: SectionTitleProps) => {

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <motion.span
        className="font-mono text-sm text-emerald-400"
        {...sectionTitleAnimation}
        transition={{ duration: 0.5 }}
      >{`../${subtitle}`}</motion.span>
      <motion.h3
        className="text-3xl font-medium"
        {...sectionTitleAnimation}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h3>
    </div>
  )
}