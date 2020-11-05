import styled, { css } from 'styled-components';

interface PostComponentProps {
  background?: string;
}

export const Blog = styled.section`
  max-width: 1120px;
  width: 100%;

  margin-top: 72px;

  h2 {
    max-width: fit-content;

    font-size: 36px;
    font-weight: 400;

    margin-bottom: 24px;
  }
`;

export const PostComponent = styled.a<PostComponentProps>`
  max-width: 350px;
  overflow: hidden;
  text-decoration: none;

  border-radius: 20px;
  box-shadow: 5px 5px 5px rgba(0,0,0,0.2);
  margin: 16px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: all 0.2s;

  /* ${props => props.background && css`
    background-image: url(${props.background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `} */

  img {
    max-width: 350px;
    max-height: 400px;
  }

  p {
    margin: 16px;
    font-weight: 500;
    color: #FF7B32;
    font-size: 21px;
    line-height: 21px;
    text-align: center;
  }

  & + a {
    margin-left: auto;
  }

  &:hover {
    opacity: 0.8;
    cursor: pointer;
    transform: translateY(-8px);
  }
`;

export const Posts = styled.div`
  display: flex;
`;