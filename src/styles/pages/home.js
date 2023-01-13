import styled from 'styled-components';
import { sizes } from 'styles/sizes';

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0.8rem 2.4rem 0;
`;

const AboutSection = styled.section`
  flex: 1;
  position: relative;
  max-width: ${sizes.desktop_md}px;

  @media (min-width: ${sizes.desktop_sm}px) {
    display: flex;
    align-items: center;
  }

  img {
    width: 48vw;
    height: 48vw;

    max-width: 32rem;
    max-height: 32rem;

    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    position: absolute;
    right: 0;

    z-index: -1;

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

    h1 > span {
      padding: 0.2rem 0.8rem;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.office};

      line-height: 4rem;
    }

    small {
      margin: 0.4rem 0 0 12rem;
      color: ${({ theme }) => theme.colors.highlight};
      text-decoration: line-through;

      @media (min-width: ${sizes.mobile_sm}px) {
        margin: 0.4rem 0 0 16rem;
      }
    }

    @media (min-width: ${sizes.mobile_lg}px) {
      margin-top: 26vw;
    }

    @media (min-width: 500px) {
      margin-top: 8rem;
      min-width: 27rem;
      max-width: 48vw;
    }

    @media (min-width: ${sizes.desktop_sm}px) {
      margin: 0 0 0 8rem;
      max-width: unset;
    }
  }
`;

export { Main, AboutSection };
