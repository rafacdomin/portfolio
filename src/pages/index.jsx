import { useEffect, useMemo, useState } from 'react';
import { useTheme } from 'styled-components';
import Image from 'next/image';
import Lottie from 'lottie-react';

import babyYodaAnimation from 'lottie/baby-yoda.json';
import {
  Button,
  Header,
  SEO,
  Footer,
  ListSection,
  Card,
  TechItem,
  GridItem,
} from 'components';
import {
  Main,
  AboutSection,
  AboutContent,
  GridList,
  ContactSection,
  ContactForm,
  ProjectsSection,
  ContactAnimation,
} from 'styles/pages/home';
import { sizes } from 'styles/sizes';

export default function Home({ changeTheme }) {
  const {
    images: {
      profilePic,
      contactSVG,
      saberLeft,
      saberRight,
      linkedinSVG,
      githubSVG,
      devSVG,
    },
    colors: { highlight },
    name: theme,
  } = useTheme();
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < sizes.desktop_sm);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const techsImages = useMemo(() => {
    const techs = [
      {
        name: 'React',
        image:
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
        url: 'https://reactjs.org/',
      },
      {
        name: 'React 1',
        image:
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
        url: 'https://reactjs.org/',
      },
      {
        name: 'React 2',
        image:
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
        url: 'https://reactjs.org/',
      },
      {
        name: 'React 3',
        image:
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
        url: 'https://reactjs.org/',
      },
      {
        name: 'React 4',
        image:
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
        url: 'https://reactjs.org/',
      },
      {
        name: 'React 5',
        image:
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
        url: 'https://reactjs.org/',
      },
    ];

    return techs.map(({ name, image, url }) => (
      <li key={name}>
        <TechItem name={name} image={image} url={url} />
      </li>
    ));
  }, []);

  const projectsElements = useMemo(() => {
    const projects = [
      {
        title: 'Project 1',
        image:
          'https://images.prismic.io/rafael-domingues-portfolio/f7c46ef6-5ecc-4d0b-a38f-d9223545829a_1_y6C4nSvy2Woe0m7bWEn4BA.png?auto=compress,format',
        url: 'https://rafaeldomingues.dev',
      },
      {
        title: 'Project 1',
        image:
          'https://images.prismic.io/rafael-domingues-portfolio/c5f15cc5-c09c-4b8a-8978-d69fd42a6e56_demo.png?auto=compress,format',
        url: 'https://rafaeldomingues.dev/en',
      },
      {
        title: 'Project 1',
        image:
          'https://images.prismic.io/rafael-domingues-portfolio/6336aee7-099e-4ccc-b7ea-c8ecc510c6f4_3f3xmx9tb3310r7wsl1c.gif?auto=compress,format',
        url: 'https://rafaeldomingues.dev/pt',
      },
    ];

    return projects.slice(0, 4).map(({ title, image, url }) => (
      <li key={url}>
        <GridItem title={title} image={image} url={url} />
      </li>
    ));
  }, []);

  const socials = useMemo(() => {
    const socialItems = [
      {
        name: 'Linkedin',
        image: linkedinSVG,
        url: 'https://www.linkedin.com/in/rafaelcodomingues',
      },
      {
        name: 'Github',
        image: githubSVG,
        url: 'https://www.linkedin.com/in/rafaelcodomingues',
      },
      {
        name: 'Dev.to',
        image: devSVG,
        url: 'https://www.linkedin.com/in/rafaelcodomingues',
      },
    ];

    return socialItems.map((social) => (
      <li key={social.name}>
        <a href={social.url} target="_blank" rel="noreferrer">
          <Image src={social.image} alt={social.name} />
        </a>
      </li>
    ));
  }, [devSVG, githubSVG, linkedinSVG]);

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
    <>
      <SEO title="Rafael Domingues | FrontEnd Dev" shouldExcludeTitleSuffix />
      <Header changeTheme={changeTheme} />
      <Main>
        <AboutSection id="about">
          <Image src={profilePic} alt="profile" priority />
          <AboutContent>
            <h1>
              Hello There. <br />
              {isMobile ? "I'm Rafael," : 'I am Rafael Domingues,'}
              <br />
              <span>Front End Developer</span>
            </h1>
            <small>
              and {theme === 'bright' ? 'Jedi Master' : 'Sith Lord'}
            </small>

            <p>
              Currently based in Rio de Janeiro, Brazil, Planet Earth. Working
              with the development and improvement of a Design System and, in
              the meantime, helping the galaxy find peace.
            </p>

            <ul>{socials}</ul>
          </AboutContent>
        </AboutSection>

        <ListSection id="techs" title="Techs" url="">
          <ul>{techsImages}</ul>
        </ListSection>

        <ProjectsSection id="projects">
          <div>
            <h2>Projects</h2>
            <p>Some of my most recents projects</p>
          </div>

          <ul>
            <li>
              <Card
                image="https://stefantopalovicdev.vercel.app/static/media/coindom-full.c5fef9ca2f47e52897f8.png"
                title="How i created a query language for .git"
                description="TLDR How i created a query language for.git files (GQL) GQL is aquery language with a syntax very similar to SQL with a tiny engine to perform queries on. git files. The engine has the functionality to deal with."
                techs={[{ name: 'React', url: 'https://reactjs.org' }]}
                githubURL="https://github.com/"
                demoURL="https://github.com/"
              />
            </li>
            <li>
              <Card
                image="https://stefantopalovicdev.vercel.app/static/media/coindom-full.c5fef9ca2f47e52897f8.png"
                title="How i created a query language for .git files (GQL)"
                description="TLDR How i created a query language for.git files (GQL) GQL is aquery language with a syntax very similar to SQL with a tiny engine to perform queries on. git files. The engine has the functionality to deal with."
                techs={[{ name: 'React', url: 'https://reactjs.org' }]}
                githubURL="https://github.com/"
                demoURL="https://github.com/"
              />
            </li>
          </ul>
        </ProjectsSection>

        <ListSection id="posts" title="Posts" url="">
          <GridList>{projectsElements}</GridList>
        </ListSection>

        <ContactSection id="contact">
          <h1>
            {"Let's get in touch!"} <Image src={contactSVG} alt="" />
          </h1>
          <p>
            Send me a message via email or connect with me through my social
            media.
          </p>

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
          </ContactAnimation>

          <div>{sabers}</div>
          <ul>{socials}</ul>
        </ContactSection>
      </Main>
      <Footer />
    </>
  );
}
