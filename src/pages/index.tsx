import { FiMenu, FiDownload } from 'react-icons/fi';

import RafaDev from '@/assets/Logo.svg';
import aboutSVG from '@/assets/about.svg';

import { Container, Header, Menu, About,  } from "@/styles/pages/index";

export default function Home() {
  return (
    <Container>
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
    </Container>
  )
}
