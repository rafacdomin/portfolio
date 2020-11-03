import styled from 'styled-components';

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
