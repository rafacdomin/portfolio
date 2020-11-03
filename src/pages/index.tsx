import { GetServerSideProps } from 'next';
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';

import { client } from '@/lib/prismic';
import SEO from '@/components/SEO';
import About from '@/components/about';
import Contact from '@/components/contact';
import Header from '@/components/header';
import Projects from '@/components/projects';
import Blog from '@/components/blog';

import { Container  } from "@/styles/pages/index";

interface HomeProps {
  projects: Document[];
  posts: Document[];
}

export default function Home({ projects, posts }: HomeProps) {
  return (
    <Container>
      <SEO title="Rafael Domingues | Frontend DEV" shouldExcludeTitleSuffix/>

      <Header />

      <About />
    
      <Projects projects={ projects }/>

      <Blog posts={ posts }/>

      <Contact />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const [projects, posts] = await Promise.all([
    client().query([
      Prismic.Predicates.at('document.type', 'projects')
    ]),
    client().query([
      Prismic.Predicates.at('document.type', 'posts')
    ])
  ])
  
  return {
    props: {
      projects: projects.results,
      posts: posts.results,
    }
  }
}
