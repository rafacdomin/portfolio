import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  background: #fff;
  z-index: 999;
  width: 100%;
  display: flex; 
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 6px rgba(0,0,0,0.1);

  > div{
    width: 100%;
    max-width: 1120px;
    display: flex;
    flex: 1;
    justify-content: space-between;
    padding: 4px 0;

    img {
      height: 34px;
      width: 126px;
    }
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
