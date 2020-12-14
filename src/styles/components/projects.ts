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

      span {
        display: unset;
      }
    }

    span {
      display: none;
      position: absolute;
      bottom: 4px;
      left: 0;

      background: rgba(0, 0, 0, 0.6);
      padding: 16px;
      width: 100%;
      border-radius: 4px;

      color: #fff;
      font-size: 21px;
      font-weight: bold;

      p {
        margin: 8px 0;
        font-size: 14px;
        font-weight: normal;
      }
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

