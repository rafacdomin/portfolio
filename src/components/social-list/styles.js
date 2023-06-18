import styled from 'styled-components';

export const List = styled.ul`
  margin: 1.6rem 0 0 0;
  list-style: none;
  display: flex;

  align-items: center;
  justify-content: flex-start;

  li {
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }

    & + li {
      margin-left: 0.8rem;
    }

    a {
      padding: 0.8rem;
    }
  }
`;
