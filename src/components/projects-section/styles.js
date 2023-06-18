import styled from 'styled-components';
import { sizes } from 'styles/sizes';

export const Section = styled.section`
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

    @media (min-width: ${sizes.desktop_md}px) {
      flex-direction: column;

      width: 100%;
    }

    li {
      & + li {
        margin-left: 1.6rem;

        @media (min-width: ${sizes.desktop_md}px) {
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
