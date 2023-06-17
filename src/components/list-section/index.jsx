import React from 'react';

import { Section } from './styles';

export const ListSection = ({
  title,
  description,
  url,
  children,
  ...props
}) => {
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
