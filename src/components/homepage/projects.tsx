import { useCallback, useState } from 'react';
import { Document } from 'prismic-javascript/types/documents';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { Projects, Carousel} from '@/styles/components/projects';

interface ProjectProps {
  projects: Document[];
}

export default function ProjectsComponent ({ projects }: ProjectProps) {
  const [project, setProject] = useState(projects[0]);
  const [projectIndex, setIndex] = useState(0);

  const handleNextProject = useCallback(() => {
    if(projects.length <= (projectIndex + 1)){
      setProject(projects[0]);
      setIndex(0);

      return;
    }
    setProject(projects[projectIndex + 1]);
    setIndex(projectIndex + 1);
  }, [projects, projectIndex])

  const handlePreviousProject = useCallback(() => {
    if(projectIndex - 1 < 0){
      setProject(projects[projects.length - 1]);
      setIndex(projects.length - 1);

      return;
    }
    setProject(projects[projectIndex - 1]);
    setIndex(projectIndex - 1);
  }, [projects, projectIndex])

  return (
    <Projects id="projects">
      <h2>PROJETOS</h2>

        <Carousel>
          <button type="button" onClick={handlePreviousProject}>
            <FiChevronLeft size={40}/>  
          </button>

          <a href={project.data.github_url.url} target="_blank">
            <img 
              src={project.data.image.url} 
              alt={project.data.image.alt}
            />
            <span>
              {project.data.title[0].text}

              <p>
                {project.data.description[0]?.text}
              </p>
            </span>
          </a>

          <button type="button" onClick={handleNextProject}>
            <FiChevronRight size={40} />
          </button>
        </Carousel>
    </Projects>
  );
}