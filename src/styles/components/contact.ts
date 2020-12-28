import styled from 'styled-components';

export const Contact = styled.section`
  max-width: 1120px;
  width: 100vw;
  padding: 0 1.6rem;
  padding-top: 7.2rem;
  margin-bottom: 7.2rem;

  h2 {
    max-width: fit-content;
    margin-left: auto;

    font-size: 2.4rem;
    font-weight: 400;

    @media (min-width: 1100px){
      font-size: 4rem;
    }
  }

  div {
    display: flex;
    align-items: center;

    > img {
      width: 65%;
      max-height: 50rem;
      opacity: 0.8;
      z-index: -1;

      @media (min-width: 1100px){
        width: unset;
        opacity: 1;
      }
    }


    > div {
      display: flex;
      flex-direction: column;
      margin-left: -15rem;

      justify-content: center;

      @media(min-width: 1100px){
        margin-left: auto;
      }

      span {
        font-family: 'Montserrat';
        font-size: 1.2rem;
        font-weight: 400;
        color: #FF7B32;

        margin-bottom: 0.8rem;

        @media (min-width: 1100px){
          font-size: 1.6rem;
        }
      }

      h3 {
        font-size: 1.8rem;
        font-weight: 400;
        
        margin-bottom: 0.8rem;

        @media (min-width: 1100px){
          font-size: 2.4rem;
        }
      }

      p {
        font-size: 1.4rem;
        color: #666666;
        font-weight: 400;

        margin-bottom: 4.8rem;

        @media (min-width: 1100px){
          font-size: 1.6rem;
        }
      }

      > div {
        display: flex;
        flex-direction: row;
        margin-left: 0;

        a {
          transition: all 0.2s;

          img {
            width: 75%;

            @media (min-width: 1100px){
              width: 100%;
            }
          }

          & + a {
            margin-left: 4rem;

            @media (min-width: 1100px){
              margin-left: 6.4rem;
            }
          }

          &:hover{
            transform: translateY(-2px);
            opacity: 0.6;
          }
        }
      }
    }
  }
`;
