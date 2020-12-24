import { GetServerSideProps } from 'next';
import Prismic from 'prismic-javascript';
import { Document } from 'prismic-javascript/types/documents';

import { client } from '@/lib/prismic';
import { SEO, Header, About, Projects, Blog, Contact, Footer, Techs } from '@/components';

import { Container  } from "@/styles/pages/index";

interface HomeProps {
  projects: Document[];
  posts: Document[];
  techs: Document[];
}

export default function Home({ projects, posts, techs }: HomeProps) {
  return (
    <Container>
      <SEO title="Rafael Domingues | Frontend DEV" shouldExcludeTitleSuffix/>

      <Header />

      <About />

      <Techs techs={ techs }/>
    
      <Projects projects={ projects }/>

      <Blog posts={ posts }/>

      <Contact />

      <Footer />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const [projects, posts, techs] = await Promise.all([
    client().query([
      Prismic.Predicates.at('document.type', 'projects')
    ]),
    client().query([
      Prismic.Predicates.at('document.type', 'posts')
    ]),
    client().query([
      Prismic.Predicates.at('document.type', 'techs')
    ])
  ])
  
  return {
    props: {
      projects: projects.results,
      posts: posts.results,
      techs: techs.results,
    }
  }
}
