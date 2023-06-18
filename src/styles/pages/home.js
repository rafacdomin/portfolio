import styled from 'styled-components';
import { sizes } from 'styles/sizes';

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  section {
    width: 100%;
    max-width: ${sizes.desktop_md}px;
    margin: 8rem 0 0 0;

    @media (min-width: ${sizes.desktop_sm}px) {
      display: flex;
      flex-direction: column;

      margin: 10.4rem 0 0 0;
    }
  }
`;

export const GridList = styled.ul`
  @media (min-width: ${sizes.desktop_sm}px) {
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2.4rem;
    grid-row-gap: 1.6rem;

    li + li {
      margin-left: unset !important;
    }
  }
`;
