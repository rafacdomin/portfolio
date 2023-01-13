import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import Image from 'next/image';

import { Header } from 'components';
import { Main, AboutSection } from 'styles/pages/home';
import { sizes } from 'styles/sizes';

export default function Home() {
  const {
    images: { profilePic },
  } = useTheme();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

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
                : 'I am Rafael Domingues,'}{' '}
              <br />
              <span>FrontEnd Developer</span>
            </h1>
            <small>and Jedi Master</small>
            <p>
              Currently based in Rio de Janeiro, Brazil, Planet Earth. Working
              with the development and improvement of a Design System and, in
              the meantime, helping the galaxy find peace.
            </p>
            <button>Get in touch</button>
          </span>
        </AboutSection>
      </Main>
    </>
  );
}
