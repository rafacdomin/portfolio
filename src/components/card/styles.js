import styled from 'styled-components';
import { sizes } from 'styles/sizes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 64rem;
  width: 32rem;

  border-radius: 0.8rem;
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colors.card};
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.2);

  @media (min-width: ${sizes.desktop_md}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'content1 content2';
    grid-gap: 2.4rem;

    width: 100%;
    height: 32rem;
    padding: 2.4rem;
  }
`;

export const ImageExample = styled.a`
  grid-area: content1;
  overflow: hidden;
  border-radius: 0.8rem;
  height: 21rem;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: auto;

    transition: transform 2s;
    &:hover {
      transform: translateY(-5%);
    }
  }

  @media (min-width: ${sizes.desktop_md}px) {
    height: auto;
  }
`;

export const Content = styled.span`
  grid-area: content2;
  display: flex;
  flex-direction: column;
  margin: 1.6rem 0 0;
  flex: 1;

  p {
    padding: 1.6rem 0;
    line-height: 2.2rem;
  }

  @media (min-width: ${sizes.desktop_md}px) {
    margin: 0;
  }
`;

export const TechList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.8rem;

  list-style: none;

  li {
    display: inline-block;
    transition: transform 0.5s;

    &:hover {
      transform: translateY(-2px);
    }

    & + li {
      margin: 0 !important;
    }

    a {
      display: inline-block;
      font-size: 1.2rem;
      background-color: ${({ theme }) => theme.colors.secundary};
      color: ${({ theme }) => theme.colors.background};
      padding: 0.4rem 1.6rem;
      border-radius: 0.4rem;
      text-decoration: none;
    }
  }
`;

export const CallToAction = styled.div`
  display: flex;
  margin: auto 0 0;

  a {
    display: flex;
    align-items: center;

    padding: 0.4rem 0.8rem;
    border: 1px solid transparent;
    border-radius: 0.4rem;

    font-size: 1.4rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    transition: border-color 0.5s;
    
    & + a {
      margin-left: 1.6rem !important;
    }

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary}};
    }

    img {
      margin-right: 0.4rem;
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`;
