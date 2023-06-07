import React from 'react';
import Image from 'next/image';

import {} from './styles';

export const Header = ({
  image,
  title,
  description,
  techs,
  githubURL,
  demoURL,
}) => {
  return (
    <div>
      <Image src="https://stefantopalovicdev.vercel.app/static/media/coindom-full.c5fef9ca2f47e52897f8.png" />

      <span>
        <h1>Title</h1>

        <p>
          Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer at malesuada tortor, id fringilla lorem. Ut ac justo rhoncus
          massa egestas iaculis. Vivamus eget orci et dolor imperdiet imperdiet
          vitae sed lectus. In lobortis, odio ullamcorper iaculis venenatis,
          urna nisl aliquam augue, ac posuere erat lectus dignissim leo.
        </p>

        <ul>
          <li>tech</li>
          <li>tech</li>
          <li>tech</li>
        </ul>

        <div>
          <a href="https://google.com" target="_blank" rel="noreferrer">
            Live Demo
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
      </span>
    </div>
  );
};
