import { GetServerSideProps } from 'next';
import getT from 'next-translate/getT';
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

export default function Home({ projects, posts, techs, resume }: HomeProps) {
  return (
    <Container>
      <SEO title="Rafael Domingues | DEV" shouldExcludeTitleSuffix/>

      <Header />

      <About resume={ resume } />

      <Techs techs={ techs }/>
    
      <Projects projects={ projects }/>

      <Blog posts={ posts }/>

      <Contact />

      <Footer />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({ locale }) => {
  const t = await getT(locale, 'common');

  const [projects, posts, techs, resume] = await Promise.all([
    client().query([
      Prismic.Predicates.at('document.type', 'projects')
    ], { lang: t(`${locale}`) }),
    client().query([
      Prismic.Predicates.at('document.type', 'posts'),
    ], { lang: t(`${locale}`) }),
    client().query([
      Prismic.Predicates.at('document.type', 'techs')
    ]),
    client().query([
      Prismic.Predicates.at('document.type', 'resume')
    ])
  ])
  
  return {
    props: {
      projects: projects.results,
      posts: posts.results,
      techs: techs.results,
      resume: resume.results,
    }
  }
}
