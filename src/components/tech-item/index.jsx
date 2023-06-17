import React from 'react';

import { TechLink } from './styles';
import { ContentfulImage } from 'components/contentful-image';

export const TechItem = ({ name, url, image }) => {
  return (
    <TechLink href={url} target="_blank" rel="external noreferrer">
      <ContentfulImage
        src={image.fields.file.url}
        alt={name}
        width={image.fields.file.details.image.width}
        height={image.fields.file.details.image.height}
      />
      <span>{name}</span>
    </TechLink>
  );
};
