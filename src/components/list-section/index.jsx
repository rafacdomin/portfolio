import React from 'react';

import { Section } from './styles';

export const ListSection = ({ fields, children, ...props }) => {
  const { title, description } = fields;

  return (
    <Section {...props}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      {children}
    </Section>
  );
};
