import styled from 'styled-components';
import { sizes } from 'styles/sizes';

export const List = styled.ul`
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

  li {
    img {
      object-fit: cover;
    }
  }

  > li + li {
    margin-left: 1.6rem;

    @media (min-width: ${sizes.desktop_sm}px) {
      margin-left: 2.4rem;
    }
  }
`;
