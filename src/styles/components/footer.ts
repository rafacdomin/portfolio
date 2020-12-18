import styled from 'styled-components';

export const Footer = styled.footer`
  padding: 0 1.6rem;
  margin-top: 12rem;
  padding-bottom: 0.8rem;
  margin-bottom: 0.1rem;
  border-bottom: 0.4rem solid #FF7B32;
  max-width: 1120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;

  img {
    height: 80%;
  }

  span {
    font-weight: 400;
    font-size: 1.2rem;
    color: #666;
  }

  @media(min-width: 1100px) {
    padding-right: 0;
    padding-left: 0;
  }
`;
