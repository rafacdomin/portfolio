import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  align-items: center;

  margin-top: 0.8rem;

  img {
    width: 18rem;
    height: 100%;

    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export { Main };
