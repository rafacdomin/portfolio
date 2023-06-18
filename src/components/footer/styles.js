import styled from 'styled-components';
import { sizes } from 'styles/sizes';

export const StyledFooter = styled.footer`
  width: 100%;

  > div {
    width: 100%;
    display: flex;
    justify-content: center;

    div {
      flex: 1;
      margin: 1.6rem 2.4rem 0;
      max-width: ${sizes.desktop_md}px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      font-size: 1.2rem;
    }
  }

  ul {
    display: flex;
    margin: 1.6rem 0 0;
  }
`;

export const Color = styled.li`
  flex: 1;
  list-style: none;

  height: 0.4rem;
  background-color: ${({ color }) => color};
`;
