import RafaDev from '@/assets/Logo.svg';
import { FiMenu } from 'react-icons/fi';

import { Header, Menu } from '@/styles/components/header'

const HeaderComponent: React.FC = () => {
  return (
    <Header>
        <div>
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
        </div>
      </Header>
  );
}

export default HeaderComponent;