import styled from 'styled-components';
import { lighten } from 'polished';

const ButtonStyled = styled.button`
  border: none;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};

  padding: 0.8rem 3.2rem;
  border-radius: 0.4rem;

  width: fit-content;

  transition: background-color 0.5s;
  transition: transform 0.5s;

  &:hover {
    background-color: ${({ backgroundColor }) =>
      lighten(0.05, backgroundColor)};
    transform: translateY(-2px);
  }
`;

export { ButtonStyled };
