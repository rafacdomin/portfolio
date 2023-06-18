import React, { useMemo } from 'react';
import Lottie from 'lottie-react';
import { useTheme } from 'styled-components';

import { Button, SocialList } from 'components';
import { Section, ContactForm, ContactAnimation } from './styles';
import babyYodaAnimation from 'lottie/baby-yoda.json';
import Image from 'next/image';

export const ContactSection = ({ fields, isMobile, children, ...props }) => {
  const {
    images: { saberLeft, saberRight },
    colors: { highlight },
    name: theme,
  } = useTheme();
  const { title, description, linkedin, github, dev } = fields;

  const sabers = useMemo(() => {
    if (isMobile) {
      return <Image src={saberLeft} alt="" />;
    } else {
      return (
        <>
          <Image
            src={saberLeft}
            alt=""
            className={theme === 'dark' ? 'rotate' : null}
          />
          <Image src={saberRight} alt="" />
        </>
      );
    }
  }, [isMobile, saberLeft, saberRight, theme]);

  return (
    <Section {...props}>
      {/* <h1>{title}</h1>
      <p>{description}</p>

      <ContactAnimation>
        <Lottie animationData={babyYodaAnimation} loop />

        <ContactForm action="">
          <label htmlFor="email">Your Best Email</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message</label>
          <textarea rows="8" cols="50" id="message" name="message" />

          <Button type="submit" backgroundColor={highlight} color="white">
            Send
          </Button>
        </ContactForm>
      </ContactAnimation> */}

      <div>{sabers}</div>
      <SocialList linkedinURI={linkedin} devURI={dev} githubURI={github} />
    </Section>
  );
};
