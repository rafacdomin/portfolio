import { GetServerSideProps } from 'next';
import Prismic from 'prismic-javascript';
import { Document } from 'prismic-javascript/types/documents';

import { client } from '@/lib/prismic';
import { SEO, Header, About, Projects, Blog, Contact, Footer } from '@/components';

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

      <Footer />
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
