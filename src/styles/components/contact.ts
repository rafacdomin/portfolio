import styled from 'styled-components';

export const Contact = styled.section`
  max-width: 1120px;
  width: 100%;
  margin-top: 72px;

  h2 {
    max-width: fit-content;
    margin-left: auto;

    font-size: 36px;
    font-weight: 400;
  }

  div {
    display: flex;
    align-items: center;


    > div {
      display: flex;
      flex-direction: column;
      margin-left: auto;

      justify-content: center;

      span {
        font-family: 'Montserrat';
        font-size: 16px;
        font-weight: 400;
        color: #FF7B32;

        margin-bottom: 8px;
      }

      h3 {
        font-size: 28px;
        font-weight: 400;
        
        margin-bottom: 8px;
      }

      p {
        font-size: 18px;
        color: #666666;
        font-weight: 400;

        margin-bottom: 48px;
      }

      > div {
        display: flex;
        flex-direction: row;
        margin-left: 0;

        a {
          transition: all 0.2s;

          & + a {
            margin-left: 64px;
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
