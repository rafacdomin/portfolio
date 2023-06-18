import React from 'react';
import Image from 'next/image';
import { useTheme } from 'styled-components';

import { HeaderContainer, HeaderNav, NavList } from './styles';

export const Header = ({ changeTheme }) => {
  const {
    images: { logoSVG, menuSVG, themeSVG },
  } = useTheme();

  const NavItems = () => {
    const navArray = [
      { children: 'About', href: '#about', element: 'a' },
      { children: 'Projects', href: '#projects', element: 'a' },
      { children: 'Posts', href: '#posts', element: 'a' },
      // { children: 'Contact', href: '#contact', element: 'a' },
      {
        children: <Image src={themeSVG} alt="menu" />,
        element: 'button',
        type: 'button',
        onClick: () => changeTheme(),
      },
    ];

    return navArray.map(({ element, ...props }) => (
      <li key={props.children}>{React.createElement(element, props)}</li>
    ));
  };

  return (
    <HeaderContainer>
      <section>
        <Image src={logoSVG} alt="Rafa Dev" priority />
        <HeaderNav>
          <NavList>
            <NavItems />
          </NavList>

          {/* <button type="button" onClick={() => {}}>
            <Image src={menuSVG} alt="menu" />
          </button> */}
        </HeaderNav>
      </section>
    </HeaderContainer>
  );
};
