import React, { useMemo } from 'react';
import Image from 'next/image';
import { useTheme } from 'styled-components';

import {
  Container,
  Content,
  TechList,
  CallToAction,
  ImageExample,
} from './styles';
import { ContentfulImage } from 'components';

export const Card = ({
  image,
  title,
  description,
  techs,
  githubURL,
  demoURL,
}) => {
  const {
    images: { githubSVG, externalLinkSVG },
  } = useTheme();

  const techsList = useMemo(() => {
    return techs
      ? Object.entries(techs).map(([name, url]) => (
          <li key={name}>
            <a href={url} target="_blank" rel="noreferrer">
              {name}
            </a>
          </li>
        ))
      : null;
  }, [techs]);

  return (
    <Container>
      <ImageExample href={demoURL} target="_blank" rel="noreferrer">
        <ContentfulImage
          src={image.fields.file.url}
          alt={image.fields.title}
          width={image.fields.file.details.image.width}
          height={image.fields.file.details.image.height}
        />
      </ImageExample>

      <Content>
        <h2>{title}</h2>

        <p>{description}</p>

        <TechList>{techsList}</TechList>

        <CallToAction>
          <a href={demoURL} target="_blank" rel="noreferrer">
            <Image src={externalLinkSVG} alt="Github" /> Live Demo
          </a>
          <a href={githubURL} target="_blank" rel="noreferrer">
            <Image src={githubSVG} alt="Github" /> Github
          </a>
        </CallToAction>
      </Content>
    </Container>
  );
};
