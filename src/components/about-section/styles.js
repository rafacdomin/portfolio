import styled from 'styled-components';
import { sizes } from 'styles/sizes';

export const Section = styled.section`
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
    transition: border-radius 1s ease-in-out;

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
`;
