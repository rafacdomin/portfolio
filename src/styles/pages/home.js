import styled from 'styled-components';
import { sizes } from 'styles/sizes';
import { colors } from 'styles/colors';

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  section {
    flex: 1;
    width: 100%;
    max-width: ${sizes.desktop_md}px;
    margin: 8rem 0 0 0;
    padding: 0 2.4rem;

    @media (min-width: ${sizes.desktop_sm}px) {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin: 10.4rem 0 0 0;
    }
  }
`;

const AboutSection = styled.section`
  flex-direction: row !important;
  position: relative;

  > img {
    width: 48vw;
    height: 48vw;

    max-width: 32rem;
    max-height: 32rem;

    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.primary};
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

  > span {
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
  }
`;

const TechItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-decoration: none;
  color: inherit;

  transition: all 0.5s;
  &:hover {
    transform: scale(1.1);

    img {
      filter: brightness(0.8);
    }
  }

  img {
    background: ${colors.dark};
    padding: 0.8rem;
    border-radius: 50%;
    margin-bottom: 0.8rem;

    width: 8rem;
    height: 8rem;
    transition: all 0.5s;

    @media (min-width: ${sizes.desktop_sm}px) {
      width: 10rem;
      height: 10rem;
    }
  }
`;

const GridItem = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  text-decoration: none;
  color: inherit;

  transition: all 0.5s;
  &:hover {
    transform: translateY(-2px);

    img {
      filter: brightness(0.8);
    }
  }

  img {
    object-fit: cover;

    width: 24rem;
    height: 16rem;

    border-radius: 0.8rem;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.5s;

    @media (min-width: ${sizes.desktop_sm}px) {
      width: 100%;
      height: 24vw;
      max-height: 240px;
    }
  }

  span {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);

    position: absolute;
    bottom: 0;
    border-radius: 0 0 0.8rem 0.8rem;

    padding: 16px 24px;
    color: ${colors.white};
  }
`;

const GridList = styled.ul`
  @media (min-width: ${sizes.desktop_sm}px) {
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 24px;
    grid-row-gap: 16px;

    li + li {
      margin-left: unset !important;
    }
  }
`;

const Contact = styled.section`
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

  form {
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

export { Main, AboutSection, TechItem, GridItem, GridList, Contact };
