import { useEffect, useMemo, useState } from 'react';
import { useTheme } from 'styled-components';
import Image from 'next/image';
import Lottie from 'lottie-react';

import { client } from 'lib/contentful/client';
import babyYodaAnimation from 'lottie/baby-yoda.json';
import {
  Button,
  Header,
  SEO,
  Footer,
  ListSection,
  GridItem,
  TechsList,
  AboutSection,
  ProjectsSection,
} from 'components';
import {
  Main,
  GridList,
  ContactSection,
  ContactForm,
  ContactAnimation,
} from 'styles/pages/home';
import { sizes } from 'styles/sizes';

export default function Home({
  changeTheme,
  sections,
  techs,
  projects,
  posts,
}) {
  const {
    images: { contactSVG, saberLeft, saberRight },
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

  const postsElements = useMemo(() => {
    return posts.slice(0, 4).map(({ fields: { title, image, url } }) => (
      <li key={url}>
        <GridItem title={title} image={image} url={url} />
      </li>
    ));
  }, [posts]);

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
        <AboutSection
          data={sections.find((section) => section.fields.slug === 'about')}
          isMobile={isMobile}
        />

        <ListSection
          id="techs"
          fields={
            sections.find((section) => section.fields.slug === 'techs').fields
          }
        >
          <TechsList data={techs} />
        </ListSection>

        <ProjectsSection
          id="projects"
          fields={
            sections.find((section) => section.fields.slug === 'projects')
              .fields
          }
          projects={projects}
        />

        <ListSection
          id="posts"
          fields={
            sections.find((section) => section.fields.slug === 'posts').fields
          }
        >
          <GridList>{postsElements}</GridList>
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
          {/* <ul>{socials}</ul> */}
        </ContactSection>
      </Main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const [sectionsResponse, techsResponse, projectsResponse, postsResponse] =
    await Promise.all([
      client.getEntries({ content_type: 'sections' }),
      client.getEntries({ content_type: 'techs' }),
      client.getEntries({ content_type: 'projects' }),
      client.getEntries({ content_type: 'posts' }),
    ]);

  return {
    props: {
      sections: sectionsResponse.items,
      techs: techsResponse.items,
      projects: projectsResponse.items,
      posts: postsResponse.items,
      revalidate: 60,
    },
  };
}
