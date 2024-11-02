import { Button } from "@/components/button"
import { Link } from "@/components/link"
import { SectionTitle } from "@/components/section-title"
import { TechBadge } from "@/components/tech-badge"
import { FiGlobe } from "react-icons/fi"
import { HiArrowLeft } from "react-icons/hi"
import { TbBrandGithub } from "react-icons/tb"

export const ProjectDetails = () => {
    return (
        <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
            <div
                className="absolute inset-0 z-[-1]"
                style={{
                    background: 'url(/images/hero-bg.png) no-repeat center/cover, url(/images/inteligencia-artificial.png) no-repeat center/cover'
                }}
            />

            <SectionTitle
                subtitle="Projetos"
                title="Alexa-IoT"
                className="text-center items-center sm:[&>h3]:text-4xl"
            />
            <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia voluptates obcaecati laudantium iure labore aliquam, modi laboriosam. Veniam, minus, asperiores, error eveniet tenetur fugiat non laborum porro reiciendis doloremque recusandae eius facere ipsa voluptatem autem nulla dolor aliquam. Obcaecati maiores unde, voluptates iusto animi porro aliquam illum amet at. Id?
            </p>
            <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
                <TechBadge name="Python" />
            </div>
            <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
                <a href="https://github.com/Ruan-F-M/Alexa-IoT" target="_blank">
                    <Button className="max-w-[180px]">
                        <TbBrandGithub size={20} />
                        Repositório
                    </Button>
                </a>
                <a href="https://github.com/Ruan-F-M/Alexa-IoT" target="_blank">
                    <Button className="max-w-[180px]" >
                        <FiGlobe size={20} />
                        Projeto Online
                    </Button>
                </a>
            </div>
            <Link href="/projects">
                <HiArrowLeft size={20} />
                Voltar para projetos
            </Link>
        </section >
    )
}