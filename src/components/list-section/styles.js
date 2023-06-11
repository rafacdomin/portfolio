import styled from 'styled-components';
import { sizes } from 'styles/sizes';

export const Section = styled.section`
  & > * {
    padding: 0 2.4rem;
    width: 100%;
  }

  > div {
    display: flex;
    justify-content: space-between;

    h1 {
      display: flex;
      align-items: flex-start;

      img {
        margin-left: 0.8rem;
      }
    }

    a {
      display: block;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.secundary};

      text-align: end;
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  > ul {
    display: flex;
    list-style: none;

    overflow-x: scroll;

    padding: 3.4rem 1.6rem;
    @media (min-width: ${sizes.desktop_sm}px) {
      padding: 3.2rem 2.4rem;
    }

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    > li + li {
      margin-left: 1.6rem;

      @media (min-width: ${sizes.desktop_sm}px) {
        margin-left: 2.4rem;
      }
    }
  }
`;
