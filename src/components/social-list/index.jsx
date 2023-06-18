import React, { useMemo } from 'react';
import Image from 'next/image';
import { useTheme } from 'styled-components';

import { List } from './styles';

export const SocialList = ({ linkedinURI, githubURI, devURI, ...props }) => {
  const {
    images: { linkedinSVG, githubSVG, devSVG },
  } = useTheme();

  const socialItems = useMemo(
    () => [
      {
        name: 'Linkedin',
        image: linkedinSVG,
        url: linkedinURI,
      },
      {
        name: 'Github',
        image: githubSVG,
        url: githubURI,
      },
      {
        name: 'Dev.to',
        image: devSVG,
        url: devURI,
      },
    ],
    [linkedinURI, githubURI, devURI, devSVG, githubSVG, linkedinSVG]
  );

  return (
    <List {...props}>
      {socialItems.map((social) => (
        <li key={social.name}>
          <a href={social.url} target="_blank" rel="noreferrer">
            <Image src={social.image} alt={social.name} />
          </a>
        </li>
      ))}
    </List>
  );
};
