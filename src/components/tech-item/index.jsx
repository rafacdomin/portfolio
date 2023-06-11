import React from 'react';
import Image from 'next/image';

import { TechLink } from './styles';

export const TechItem = ({ name, url, image }) => {
  return (
    <TechLink href={url} target="_blank" rel="external noreferrer">
      <Image src={image} alt={name} width={80} height={80} />
      <span>{name}</span>
    </TechLink>
  );
};
