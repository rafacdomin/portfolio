import { useEffect, useMemo, useState } from 'react';

import { client } from 'lib/contentful/client';
import {
  Header,
  SEO,
  Footer,
  ListSection,
  GridItem,
  TechsList,
  AboutSection,
  ProjectsSection,
  ContactSection,
} from 'components';
import { Main, GridList } from 'styles/pages/home';
import { sizes } from 'styles/sizes';

export default function Home({
  changeTheme,
  sections,
  techs,
  projects,
  posts,
}) {
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

        <ContactSection
          id="contact"
          fields={
            sections.find((section) => section.fields.slug === 'contact').fields
          }
        />
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
    },
    revalidate: 10,
  };
}
