import styled from 'styled-components';
import { colors } from 'styles/colors';
import { sizes } from 'styles/sizes';

export const GridLink = styled.a`
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

    width: 32rem;
    height: 18rem;

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

    padding: 1.6rem 2.4rem;
    color: ${colors.white};
  }
`;
