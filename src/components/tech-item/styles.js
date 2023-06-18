import styled from 'styled-components';
import { sizes } from 'styles/sizes';

export const TechLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-decoration: none;
  color: inherit;

  transition: transform 0.5s;
  &:hover {
    img {
      filter: brightness(0.8);
      transform: scale(1.1);
    }
  }

  img {
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
