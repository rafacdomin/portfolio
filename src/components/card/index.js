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
    colors: { primary },
  } = useTheme();

  const techsList = useMemo(() => {
    return techs
      ? techs.map((tech) => (
          <li key={tech.name}>
            <a href={tech.url}>{tech.name}</a>
          </li>
        ))
      : null;
  }, [techs]);

  return (
    <Container>
      <ImageExample href={demoURL} target="_blank" rel="noreferrer">
        <Image width={100} height={100} src={image} alt={title} />
      </ImageExample>

      <Content>
        <h2>{title}</h2>

        <p>{description}</p>

        <TechList>{techsList}</TechList>

        <CallToAction textColor={primary}>
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
