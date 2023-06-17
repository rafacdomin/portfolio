import styled from 'styled-components';
import { sizes } from 'styles/sizes';

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  section {
    width: 100%;
    max-width: ${sizes.desktop_md}px;
    margin: 8rem 0 0 0;

    @media (min-width: ${sizes.desktop_sm}px) {
      display: flex;
      flex-direction: column;

      margin: 10.4rem 0 0 0;
    }
  }
`;

export const GridList = styled.ul`
  @media (min-width: ${sizes.desktop_sm}px) {
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2.4rem;
    grid-row-gap: 1.6rem;

    li + li {
      margin-left: unset !important;
    }
  }
`;

export const ContactSection = styled.section`
  padding: 0 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: unset !important;

  margin: 0 2.4rem;

  h1 {
    display: flex;
    align-items: flex-start;

    img {
      margin-left: 0.8rem;
    }
  }

  p {
    font-size: 1.4rem;
    margin: 0.8rem 0 1.6rem;

    @media (min-width: ${sizes.desktop_sm}px) {
      margin: 0.4rem 0 2.4rem;
    }
  }

  > div {
    margin: 2.4rem 0;
    display: flex;
    overflow: hidden;

    img {
      width: 100%;

      @media (min-width: ${sizes.desktop_sm}px) {
        width: 45%;

        & + img {
          margin-left: auto;
        }

        &.rotate {
          transform: rotate(180deg);
        }
      }
    }
  }

  ul {
    list-style: none;
    display: flex;

    align-items: center;
    justify-content: center;

    li {
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.1);
      }

      & + li {
        margin-left: 0.8rem;
      }

      a {
        padding: 0.8rem;
      }
    }
  }
`;

export const ContactAnimation = styled.div`
  svg {
    display: none;
    transform: scaleX(-1) !important;

    @media (min-width: ${sizes.desktop_sm}px) {
      display: unset;
    }
  }
`;

export const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${sizes.desktop_sm}px) {
    margin-left: 2.4rem;
  }

  input,
  textarea {
    margin: 0.4rem 0 0.8rem;
    padding: 0.8rem;

    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 0.4rem;

    background-color: ${({ theme }) => theme.colors.card};
    color: ${({ theme }) => theme.colors.text};

    @media (min-width: ${sizes.desktop_sm}px) {
      margin: 0.8rem 0 1.6rem;
    }
  }

  button {
    margin-left: auto;
  }
`;
