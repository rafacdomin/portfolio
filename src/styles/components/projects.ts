import styled from 'styled-components';

export const Projects = styled.section`
  max-width: 1120px;
  width: 100vw;

  padding-top: 7.2rem;

  h2 {
    padding: 0 1.6rem;
    max-width: fit-content;
    margin-left: auto;

    font-size: 2.4rem;
    font-weight: 400;

    @media(min-width: 1100px) {
      font-size: 4rem;
    }
  }
`;

export const Carousel = styled.div`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;

    transition: all 0.5s;
    transform: translateY(0rem);

    &:hover {
      opacity: 0.9;
      transform: translateY(-0.4rem);

      span {
        display: unset;
      }
    }

    img {
      width: 100%;
    }

    span {
      display: unset;
      position: absolute;
      bottom: 0.4rem;
      left: 0;

      background: rgba(0, 0, 0, 0.4);
      padding: 1.2rem 1.6rem;
      width: 100%;
      border-radius: 0.4rem;

      color: #fff;
      font-size: 1.6rem;
      font-weight: bold;

      p {
        display: none;
        margin: 0.4rem 0;
        font-size: 1.2rem;
        font-weight: normal;

        @media(min-width: 450px) {
          display: block;
        }
      }

      @media(min-width: 1100px) {
        display: none;
        padding: 1.6rem;
        font-size: 2.4rem;

        p {
          font-size: 1.6rem;
          margin: 0.8rem 0;
        }
      }
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    padding: 0.4rem;
    border: none;
    background: none;

    transition: all 0.2s;

    &:hover {
      opacity: 0.6;
      transform: translateY(-2px);
    }
  }
`;

