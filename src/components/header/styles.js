import styled from 'styled-components';
import { sizes } from 'styles/sizes';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.6rem 2.4rem;
  background-color: ${({ theme }) => theme.colors.header};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 2px 6px ${({ theme }) => theme.colors.primary};

  section {
    flex: 1;
    display: flex;
    align-items: center;

    max-width: ${sizes.desktop_md}px;

    @media (min-width: ${sizes.mobile_lg}px) {
      > img {
        width: 12rem;
        height: 100%;
      }
    }
  }
`;

export const HeaderNav = styled.nav`
  margin-left: auto;
  display: flex;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;
    border: none;
    padding: 0.8rem;
    border-radius: 50%;
  }

  @media (min-width: ${sizes.desktop_sm}px) {
    > button {
      display: none;
    }
  }
`;

export const NavList = styled.ul`
  display: none;

  @media (min-width: ${sizes.desktop_sm}px) {
    display: flex;
    align-items: center;
    list-style: none;

    li {
      a {
        text-decoration: none;
        color: inherit;
        font-family: inherit;

        padding: 0.8rem;
      }

      & + li {
        margin-left: 1.6rem;
      }
    }
  } ;
`;
