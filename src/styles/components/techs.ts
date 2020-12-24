import styled from 'styled-components';

interface ITechProps {
  src: string;
}

export const Container = styled.div`
  max-width: 1120px;
  width: 100vw;

  padding-top: 7.2rem;

  h2 {
    padding: 0 1.6rem;
    max-width: fit-content;

    font-size: 2.4rem;
    font-weight: 400;

    @media(min-width: 1100px) {
      font-size: 4rem;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  margin-top: 1.6rem;
  padding: 1.6rem 1.6rem;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  li {
    display: flex;
    flex-direction: column;
    text-align: center;
    transition: all 0.2s;

    a {
      text-decoration: none;
      color: #000;
    }

    span {
      font-size: 1.6rem;
      font-weight: 500;
    }

    & + li {
      margin-left: 1.6rem;

      @media (min-width: 1100px) {
        margin-left: auto;
      }
    }

    &:hover{
      opacity: 0.8;
      transform: translateY(-4px);
    }
  }
`;

export const Tech = styled.div<ITechProps>`
  background: url(${props => props.src}) no-repeat;
  background-size: cover;
  background-position: center;

  width: 10rem;
  height: 10rem;

  border-radius: 1.6rem;
  border: 0.1rem solid #ccc;
  box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.15);
  padding: 0.8rem 0;
  margin-bottom: 0.8rem;
`;