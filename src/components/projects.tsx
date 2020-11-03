import PrismicDOM from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';

import { Projects } from '@/styles/components/projects';

interface ProjectProps {
  projects: Document[];
}

export default function ProjectsComponent ({ projects }: ProjectProps) {
  return (
    <Projects id="projects">
      <h2>PROJETOS</h2>

      {projects.map(project => (
        <span key={project.id}>{PrismicDOM.RichText.asText(project.data.title)}</span>
      ))}
    </Projects>
  );
}