import React from 'react';

import { Section } from './styles';

export const ListSection = ({ title, url, children, ...props }) => {
  return (
    <Section {...props}>
      <div>
        <h1>{title}</h1>
        <a href={url}>See more --&gt;</a>
      </div>

      {children}
    </Section>
  );
};
