import React from 'react';
import Image from 'next/image';
import { useTheme } from 'styled-components';

import { HeaderContainer, HeaderNav, NavList } from './styles';

export const Header = () => {
  const { images : { logoSVG, menuSVG } } = useTheme();

  const NavItems = () => {
    const navArray = [
      { children: 'About', href: '#about', type: 'a' },
      { children: 'Projects', href: '#projects', type: 'a' },
      { children: 'Posts', href: '#posts', type: 'a' },
      { children: 'Contact', href: '#contact', type: 'a' },
      { 
        children: <Image src={menuSVG} alt="menu"/>,
        type: 'button' 
      },
    ];

    return navArray.map(({type, ...props}) => (
      <li key={props.children}>
        { React.createElement(type, props) }
      </li>
    ))
  };

  return (
    <HeaderContainer>
        <section>
          <Image src={logoSVG} alt="Rafa Dev" priority/>
          <HeaderNav>
            <NavList>
              <NavItems />
            </NavList>

            <button>
              <Image src={menuSVG} alt="menu"/>
            </button>
          </HeaderNav>
        </section>
      </HeaderContainer>
  )
}