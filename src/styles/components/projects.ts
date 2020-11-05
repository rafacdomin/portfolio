import styled from 'styled-components';

export const Projects = styled.section`
  max-width: 1120px;
  width: 100%;

  margin-top: 72px;

  h2 {
    max-width: fit-content;
    margin-left: auto;

    font-size: 36px;
    font-weight: 400;
  }
`;

export const Carousel = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;

    transition: all 0.2s;

    &:hover {
      opacity: 0.9;
      transform: translateY(-4px);
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    padding: 4px;
    border: none;
    background: none;

    transition: all 0.2s;

    &:hover {
      opacity: 0.6;
      transform: translateY(-2px);
    }
  }
`;

