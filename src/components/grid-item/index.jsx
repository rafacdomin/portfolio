import React from 'react';

import { ContentfulImage } from 'components';
import { GridLink } from './styles';

export const GridItem = ({ title, url, image }) => {
  return (
    <GridLink href={url} target="_blank" rel="external noreferrer">
      <ContentfulImage
        src={image.fields.file.url}
        alt={title}
        width={image.fields.file.details.image.width}
        height={image.fields.file.details.image.height}
      />
      <span>{title}</span>
    </GridLink>
  );
};
