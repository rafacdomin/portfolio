import styled from 'styled-components';
import Image from 'next/image';

export const About = styled.section`
  width: 100vw;
  max-width: 1120px;
  padding-top: 14vh;
  display: flex;
  align-items: center;

  div {
    padding-left: 1.6rem;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 5rem;
      font-weight: 600;

      @media (min-width: 1100px) {
        font-size: 8rem;
      }
    }

    p {
      font-size: 1.6rem;
      font-weight: 400;
      color: #666;
      margin-top: 0.8rem;
      margin-bottom: 2.4rem;

      @media (min-width: 1100px) {
        font-size: 2.4rem;
      }
    }

    a {
      font-size: 1.6rem;
      font-weight: 400;
      text-decoration: none;
      color: #000;
      transition: color 0.2s;

      & + a {
        margin-top: 0.8rem;
      }

      svg {
        margin-right: 0.8rem;
      }

      &:hover {
        color: #FF7B32;
      }
    }

    @media(min-width: 700px) {
      display: unset;

      a + a{
        margin-top: 0;
        margin-left: 5.6rem;
      }
    }
  }

  img {
    margin-left: -40rem;
    margin-top: -3rem;
    z-index: -1;
    width: 95%;
    max-height: 50rem;
  }

  @media (min-width: 1100px) {
    margin-top: 10rem;
    display: grid;
    align-items: unset;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'content image';

    div {
      margin-top: 8rem;
      grid-area: 'content';
      padding: 0;
    }

    img {
      margin-left: -150px;
      width: 75rem;
      position: unset;
      grid-area: 'image';
    }
  }
`;
