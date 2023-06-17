import React, { useCallback } from 'react';

import { Section } from './styles';
import { Card } from 'components/card';

export const ProjectsSection = ({ data, projects, ...props }) => {
  const { title, description } = data ? data.fields : {};

  const ProjectsList = useCallback(() => {
    return (
      <ul>
        {projects.map(
          ({
            fields: { title, description, image, githubUrl, url, techs },
          }) => (
            <li key={title}>
              <Card
                title={title}
                description={description}
                image={image}
                techs={techs}
                githubURL={githubUrl}
                demoURL={url}
              />
            </li>
          )
        )}
      </ul>
    );
  }, [projects]);

  return (
    <Section {...props}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <ProjectsList />
    </Section>
  );
};
