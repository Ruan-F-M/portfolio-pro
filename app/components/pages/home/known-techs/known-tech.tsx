'use client'

import { getRelativeTimeString } from '@/utils/get-relative-time'
import { KnownTech as IKnownTech } from '@/types/projects'
import { CMSIcon } from '@/components/cms-icon'
import { differenceInYears, differenceInMonths } from "date-fns"
import { ptBR } from "date-fns/locale"

type KnownTechProps = {
  tech: IKnownTech
}

export const KnownTech = ({ tech }: KnownTechProps) => {
  
  const startDate = new Date(tech.startDate);
  const currentDate = new Date();

  const years = differenceInYears(currentDate, startDate);
  const months = differenceInMonths(currentDate, startDate) % 12;

  // Formatação da duração, exibindo anos ou meses
  const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? 's' : ''}`
      : months > 0
      ? `${months} mês${months > 1 ? 'es' : ''}`
      : 'Menos de um mês'; // Caso não haja meses completos

  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-emerald-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        <CMSIcon icon={tech.iconSvg} />
      </div>

      <span>{formattedDuration} de experiência</span>
    </div>
  )
}
