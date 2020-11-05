import styled from 'styled-components';

export const About = styled.section`
  max-width: 1120px;
  margin-top: 80px;
  display: flex;
  align-items: center;

  h1 {
    font-size: 80px;
    line-height: 100%;
    font-weight: 600;
  }

  p {
    font-size: 24px;
    font-weight: 400;
    color: #666;
    margin-top: 16px;
    margin-right: -200px;
    margin-bottom: 48px;
  }

  a {
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    color: #000;

    & + a {
      margin-left: 56px;
    }

    svg {
      margin-right: 8px;
    }
  }

  img {
    height: 570px;
    width: 684px;
  }
`;