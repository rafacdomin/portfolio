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

export const AboutSection = styled.section`
  padding: 0 2.4rem;
  flex-direction: row !important;
  position: relative;

  > img {
    width: 48vw;
    height: 48vw;

    max-width: 32rem;
    max-height: 32rem;

    border-radius: 50%;
    border: 4px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    position: absolute;
    right: 0;
    z-index: -1;

    -webkit-animation: morph 8s ease-in-out infinite;
    animation: morph 4s ease-in-out infinite;
    transition: all 1s ease-in-out;

    @keyframes morph {
      0% {
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      }

      50% {
        border-radius: 45% 75% 85% 55%/65% 75% 45% 75%;
      }
      100% {
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      }
    }

    @media (min-width: ${sizes.desktop_sm}px) {
      position: unset;

      width: 28rem;
      height: 28rem;
    }
  }
`;

export const AboutContent = styled.span`
  display: flex;
  flex-direction: column;

  margin-top: 10rem;

  @media (min-width: ${sizes.mobile_lg}px) {
    margin-top: 26vw;
  }

  @media (min-width: 500px) {
    margin-top: 8rem;
    min-width: 27rem;
    max-width: 64vw;
  }

  @media (min-width: ${sizes.desktop_sm}px) {
    margin: 0 0 0 8rem;
    max-width: unset;
  }

  h1 {
    > span {
      padding: 0.2rem 0.8rem;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.office};

      line-height: 4rem;
    }

    @media (min-width: ${sizes.mobile_md}px) {
      font-size: 3.2rem;
    }
  }

  p {
    margin: 2rem 0;
    line-height: 2.4rem;
  }

  small {
    margin: 0 0 0 12rem;
    color: ${({ theme }) => theme.colors.highlight};
    text-decoration: line-through;

    @media (min-width: ${sizes.mobile_md}px) {
      margin: 0 0 0 21rem;
    }
  }

  ul {
    margin: 1.6rem 0 0 0;
    list-style: none;
    display: flex;

    align-items: center;
    justify-content: flex-start;

    li {
      transition: all 0.2s;

      &:hover {
        transform: scale(1.1);
      }

      & + li {
        margin-left: 1.6rem;
      }
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
      transition: all 0.2s;

      &:hover {
        transform: scale(1.1);
      }

      & + li {
        margin-left: 1.6rem;
      }
    }
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    margin: 0.4rem 0 0.8rem;
    padding: 0.8rem;

    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 0.4rem;

    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};

    @media (min-width: ${sizes.desktop_sm}px) {
      margin: 0.8rem 0 1.6rem;
    }
  }

  button {
    margin-left: auto;
  }
`;

export const ProjectsSection = styled.section`
  & > * {
    padding: 0 2.4rem;
  }

  > div {
    margin: 0 0 2.4rem;

    h2 {
      margin-bottom: 0.8rem;
    }
  }

  > ul {
    padding-bottom: 1.6rem;
    list-style: none;
    display: flex;

    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    @media (min-width: ${sizes.desktop_sm}px) {
      flex-direction: column;

      width: 100%;
    }

    li {
      & + li {
        margin-left: 1.6rem;

        @media (min-width: ${sizes.desktop_sm}px) {
          margin: 2.4rem 0 0;
        }
      }

      &:nth-child(even) {
        > div {
          > a {
            grid-area: content2;
          }

          > span {
            grid-area: content1;
          }
        }
      }
    }
  }
`;
