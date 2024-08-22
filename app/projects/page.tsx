import { ProjectsList } from "@/components/pages/home/projects/projects-list";
import { PageIntroduction } from "../components/pages/home/projects/page-introduction";

export default function Projects() {
    return (
        <>
            <PageIntroduction />
            <ProjectsList />
        </>
    )
}