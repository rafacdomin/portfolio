import styled from 'styled-components';

interface IMenuProps {
  open: boolean;
}

export const Header = styled.header`
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0.2rem 0.2rem 0.6rem rgba(0,0,0,0.1);

  > div {
    background: #fff;
    max-width: 1120px;
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.6rem;

    @media (min-width: 1100px){
      padding: 0;
    }
  }
`;

export const Menu = styled.div<IMenuProps>`
  display: flex;
  align-items: center;

  div {
    display: ${props => props.open ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 6vh;
    right: 1.6rem;

    padding: 0.4rem;
    width: 14rem;
    
    border: 0.1rem solid rgba(0, 0, 0, 0.4);
    border-radius: 0.4rem;
    box-shadow: 0.2rem 0.2rem 0.6rem rgba(0,0,0,0.1);
    background: #fff;

    a {
      display: block;
      width: 100%;
      padding: 0.4rem 1rem;
      margin: 0.2rem 0;
      border-radius: 0.4rem;

      text-decoration: none;
      text-align: left;
      color: #000;
      transition: background-color 0.5s;
      

      &:active{
        background-color: #eee;
      }

      @media (min-width: 1100px){
        transition: color 0.2s;
        
        &:hover{
          color: #666;
        }
      }
    }

    ul {
      margin-top: 0.8rem;
      padding-top: 0.4rem;
      border-top: 0.1rem solid #ccc;
      
      list-style: none;

      li {
        margin-left: 0.8rem;
        display: flex;
        align-items: center;

        img {
          height: 3rem;
        }
      }

      @media (min-width: 1100px) {
        display: ${props => props.open ? 'flex' : 'none'};
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: calc(100% - 10px);
        left: calc(50% + 420px);

        padding: 0.4rem;
        width: 14rem;
        
        border: 0.1rem solid rgba(0, 0, 0, 0.4);
        border-radius: 0.4rem;
        box-shadow: 0.2rem 0.2rem 0.6rem rgba(0,0,0,0.1);
        background: #fff;
      }
    }

    @media(min-width: 1100px){
      display: flex;
      position: unset;
      flex-direction: row;
      width: unset;
      border: none;
      box-shadow: none;
    }
  }

  > svg {
    padding: 0.8rem;
    width: 4.2rem;
    height: 4.2rem;
    border-radius: 50%;
    transition: background-color 0.5s;
    cursor: pointer;
    
    &:active {
      background-color: #ccc;
    }

    @media (min-width: 1100px){
      display: none;
      transition: color 0.2s;

      &:hover {
        color: #666;
      }
    }
  }
`;

export const OpenMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  visibility: hidden;

  img {
    height: 3rem;
    margin-right: 0.5rem;
  }

  @media(min-width: 1100px){
    visibility: unset;
    display: flex;
  }
`;