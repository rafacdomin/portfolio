import { useCallback, useState } from 'react';
import RafaDev from '@/assets/Logo.svg';
import { FiMenu } from 'react-icons/fi';

import { Header, Menu } from '@/styles/components/header'

const HeaderComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() =>{
    setIsOpen(state => !state);
  }, []);

  return (
    <Header>
      <div>
        <a href="/">
          <img src={RafaDev}/>
        </a>

        <Menu open={isOpen}>
          <div onClick={handleOpen}>
            <a href="#about">Sobre</a>
            <a href="#projects">Projetos</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contato</a>
          </div>
          <FiMenu onClick={handleOpen} size={24}/>
        </Menu>
      </div>
    </Header>
  );
}

export default HeaderComponent;