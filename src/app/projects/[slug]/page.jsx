import ProjectDetailClient from "@/components/pages/ProjectsPage/ProjectDetailClient";
import { getNextProject, getProjectBySlug, projects } from "@/data/projects";

import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const ProjectPage = async ({ params }) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(slug);

  return <ProjectDetailClient project={project} nextProject={nextProject} />;
};

export default ProjectPage;
