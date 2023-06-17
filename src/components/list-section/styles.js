import styled from 'styled-components';
import { sizes } from 'styles/sizes';

export const Section = styled.section`
  & > * {
    padding: 0 2.4rem;
    width: 100%;
  }

  h2 {
    margin-bottom: 0.8rem;
  }

  > ul {
    display: flex;
    list-style: none;

    overflow-x: scroll;

    padding: 2.4rem;

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
