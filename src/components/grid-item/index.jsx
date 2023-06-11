import React from 'react';
import Image from 'next/image';

import { GridLink } from './styles';

export const GridItem = ({ title, url, image }) => {
  return (
    <GridLink href={url} target="_blank" rel="external noreferrer">
      <Image src={image} alt={title} width={1200} height={630} />
      <span>{title}</span>
    </GridLink>
  );
};
