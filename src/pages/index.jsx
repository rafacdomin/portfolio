import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import Image from 'next/image';

import { Button, Header } from 'components';
import { Main, AboutSection } from 'styles/pages/home';
import { sizes } from 'styles/sizes';

export default function Home() {
  const {
    images: { profilePic },
    colors: { primary, office },
  } = useTheme();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Header />
      <Main>
        <AboutSection>
          <Image src={profilePic} alt="profile" priority />
          <span>
            <h1>
              Hello There. <br />
              {windowWidth < sizes.desktop_sm
                ? "I'm Rafael,"
                : 'I am Rafael Domingues,'}
              <br />
              <span>Front End Developer</span>
            </h1>
            <small>and Jedi Master</small>
            <p>
              Currently based in Rio de Janeiro, Brazil, Planet Earth. Working
              with the development and improvement of a Design System and, in
              the meantime, helping the galaxy find peace.
            </p>

            <Button color={office} backgroundColor={primary}>
              Get in touch 🤘
            </Button>
          </span>
        </AboutSection>
      </Main>
    </>
  );
}
