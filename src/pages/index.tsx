import { GetServerSideProps } from 'next';
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';
import { FiMenu, FiDownload } from 'react-icons/fi';

import { client } from '@/lib/prismic';
import SEO from '@/components/SEO';

import RafaDev from '@/assets/Logo.svg';
import aboutSVG from '@/assets/about.svg';
import contactSVG from '@/assets/contact.svg';
import linkedinSVG from '@/assets/linkedin.svg';
import githubSVG from '@/assets/github.svg';
import devSVG from '@/assets/dev.svg';

import { Container, Header, Menu, About, Projects, Blog, Contact  } from "@/styles/pages/index";

interface HomeProps {
  projects: Document[];
  posts: Document[];
}

export default function Home({ projects, posts }: HomeProps) {
  return (
    <Container>
      <SEO title="Rafael Domingues | Frontend DEV" shouldExcludeTitleSuffix/>

      <Header>
        <a href="/">
          <img src={RafaDev}/>
        </a>

        <Menu>
          <a href="#about">Sobre</a>
          <a href="#projects">Projetos</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contato</a>
          <FiMenu size={24}/>
        </Menu>
      </Header>

      <About id="about">
        <div>
          <h1>Rafael Domingues</h1>
          <p>Desenvolvedor Frontend - ReactJS | VueJS | React Native</p>

          <a href="/">
            <FiDownload size={16}/>
            Resume - ptBR
          </a>
          
          <a href="/">
            <FiDownload size={16}/>
            Resume - enUS
          </a>
        </div>

        <img src={aboutSVG}/>
      </About>
    
      <Projects id="projects">
        <h2>PROJETOS</h2>

        {projects.map(project => (
          <span key={project.id}>{PrismicDOM.RichText.asText(project.data.title)}</span>
        ))}
      </Projects>

      <Blog id="blog">
        <h2>BLOG</h2>

        {posts.map(post => (
          <span key={post.id}>{PrismicDOM.RichText.asText(post.data.title)}</span>
        ))}
      </Blog>

      <Contact id="contact">
        <h2>CONTATO</h2>

        <div>
          <img src={contactSVG} />

          <div>
            <span>Rio de Janeiro, RJ</span>
            <h3>rafaelcodomingues@gmail.com</h3>
            <p>(21) 99430-1916</p>

            <div>
              <a href="https://www.linkedin.com/in/rafaelcodomingues/" target="blank">
                <img src={linkedinSVG} />
              </a>

              <a href="https://github.com/rafacdomin" target="blank">
                <img src={githubSVG} />
              </a>

              <a href="https://dev.to/rafacdomin" target="blank">
                <img src={devSVG} />
              </a>
            </div>
          </div>
        </div>
      
      </Contact>
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
