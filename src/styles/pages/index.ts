import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
  max-width: 1120px;
  display: flex;
  justify-content: space-between;
  margin-top: 4px;

  img {
    height: 34px;
    width: 126px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 300;
    font-size: 16px;
    color: #000;
    text-decoration: none;
    transition: color 0.2s;
    
    & + a{
      margin-left: 24px;
    }

    &:hover{
      color: #666;
    }
  }

  svg {
    margin-left: 24px;

    &:hover{
      cursor: pointer;
    }
  }
`;

export const About = styled.section`
  max-width: 1120px;
  margin-top: 80px;
  display: flex;
  align-items: center;

  h1 {
    font-size: 80px;
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