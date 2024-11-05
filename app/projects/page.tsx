import { ProjectsList } from "@/components/pages/projects/projects-list";
import { PageIntroduction } from "../components/pages/projects/page-introduction";
import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";
import { ProjectsPageData } from "@/types/page-info";

export const metadata = {
  title: 'Projetos',
}

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
    `

  return fetchHygraphQuery(
    query,
    1
    // 1000 * 60 * 60 * 24, // 1 day
  )
}

export default async function Projects() {
  const { projects } = await getPageData()

  return (
    <>
      <PageIntroduction />
      <ProjectsList projects={projects} />
    </>
  )
}