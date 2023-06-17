import React from 'react';
import { useTheme } from 'styled-components';

import { Section } from './styles';
import { Card } from 'components/card';

export const ProjectsSection = ({ data, isMobile, ...props }) => {
  const {
    images: { profilePic },
    name: theme,
  } = useTheme();
  // const { description, linkedin, github, dev } = data ? data.fields : {};

  return (
    <Section id="projects" {...props}>
      <div>
        <h2>Projects</h2>
        <p>Some of my most recents projects</p>
      </div>

      <ul>
        <li>
          <Card
            image="https://stefantopalovicdev.vercel.app/static/media/coindom-full.c5fef9ca2f47e52897f8.png"
            title="How i created a query language for .git"
            description="TLDR How i created a query language for.git files (GQL) GQL is aquery language with a syntax very similar to SQL with a tiny engine to perform queries on. git files. The engine has the functionality to deal with."
            techs={[{ name: 'React', url: 'https://reactjs.org' }]}
            githubURL="https://github.com/"
            demoURL="https://github.com/"
          />
        </li>
        <li>
          <Card
            image="https://stefantopalovicdev.vercel.app/static/media/coindom-full.c5fef9ca2f47e52897f8.png"
            title="How i created a query language for .git files (GQL)"
            description="TLDR How i created a query language for.git files (GQL) GQL is aquery language with a syntax very similar to SQL with a tiny engine to perform queries on. git files. The engine has the functionality to deal with."
            techs={[{ name: 'React', url: 'https://reactjs.org' }]}
            githubURL="https://github.com/"
            demoURL="https://github.com/"
          />
        </li>
      </ul>
    </Section>
  );
};
