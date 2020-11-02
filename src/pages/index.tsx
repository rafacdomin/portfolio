import { Container, Header, Menu } from "../styles/pages/index";
import { FiMenu } from 'react-icons/fi';

import RafaDev from '../assets/Logo.svg';

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
    </Container>
  )
}
