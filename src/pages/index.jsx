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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < sizes.desktop_sm);
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
              {isMobile ? "I'm Rafael," : 'I am Rafael Domingues,'}
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
