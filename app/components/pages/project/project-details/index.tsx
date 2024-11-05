'use client'

import { Button } from "@/components/button"
import { Link } from "@/components/link"
import { SectionTitle } from "@/components/section-title"
import { TechBadge } from "@/components/tech-badge"
import { Project } from "@/types/projects"
import { RichText } from "@graphcms/rich-text-react-renderer"
import { FiGlobe } from "react-icons/fi"
import { HiArrowNarrowLeft } from "react-icons/hi"
import { TbBrandGithub } from "react-icons/tb"
import { motion } from "framer-motion"
import { fadeUpAnimation, projectPageThumbnailUrlAnimation, techBadgeAnimation } from "@/lib/animations"

type ProjectDetailProps = {
    project: Project
}

export const ProjectDetails = ({ project }: ProjectDetailProps) => {
    return (
        <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
            <motion.div
                className="absolute inset-0 z-[-1]"
                style={{
                    background: `url(/images/hero-bg.png) no-repeat center/cover, url(${project.pageThumbnail.url}) no-repeat center/cover`
                }}
                {...projectPageThumbnailUrlAnimation}
            />

            <SectionTitle
                subtitle="Projetos"
                title={project.title}
                className="text-center items-center sm:[&>h3]:text-4xl"
            />
            <motion.div
                className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base"
                {...fadeUpAnimation}
            >
                <RichText content={project.description.raw} />
            </motion.div>
            <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
                {project.technologies.map((tech, i) => (
                    <TechBadge
                        name={tech.name}
                        key={tech.name}
                        {...techBadgeAnimation}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                    />
                ))}
            </div>
            <motion.div
                className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row"
                {...fadeUpAnimation}
            >
                {project?.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                        <Button className="min-w-[180px]">
                            <TbBrandGithub size={20} />
                            Repositório
                        </Button>
                    </a>
                )}
                {project?.liveProjectUrl && (
                    <a href={project.liveProjectUrl} target="_blank" rel="noreferrer">
                        <Button className="min-w-[180px]">
                            <FiGlobe size={20} />
                            Projeto Online
                        </Button>
                    </a>
                )}
            </motion.div>
            <Link href="/projects">
                <HiArrowNarrowLeft size={20} />
                Voltar para projetos
            </Link>
        </section>
    )
}