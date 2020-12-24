import React from 'react';
import { Document } from 'prismic-javascript/types/documents';

import { Container, List, Tech } from '@/styles/components/techs';

interface ITechs {
  techs: Document[];
}

export default function techs({ techs }: ITechs) {

  return <Container id="techs">
    <h2>TECNOLOGIAS</h2>

    <List>
      {techs.map(tech => (
        <li key={tech.uid}>
          <a href={tech.data.url.url} target="_blank">
            <Tech src={tech.data.image.url}/>
            <span>{tech.data.name[0].text}</span>
          </a>
        </li>
      ))}
    </List>
  </Container>;
}