import React from 'react';
import Image from 'next/image';
import { useTheme } from 'styled-components';

import { Section, AboutContent } from './styles';
import { SocialList } from 'components/social-list';

export const AboutSection = ({ data, isMobile, ...props }) => {
  const {
    images: { profilePic },
    name: theme,
  } = useTheme();
  const { description, linkedin, github, dev } = data ? data.fields : {};

  return (
    <Section id="about" {...props}>
      <Image src={profilePic} alt="profile" priority />
      <AboutContent>
        <h1>
          Hello There. <br />
          {isMobile ? "I'm Rafael," : 'I am Rafael Domingues,'}
          <br />
          <span>Front End Developer</span>
        </h1>
        {/* <small>and {theme === 'bright' ? 'Jedi Master' : 'Sith Lord'}</small> */}

        <p>{description}</p>

        <SocialList linkedinURI={linkedin} githubURI={github} devURI={dev} />
      </AboutContent>
    </Section>
  );
};
