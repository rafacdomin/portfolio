import styled, { css } from 'styled-components';

interface PostComponentProps {
  background?: string;
}

export const Blog = styled.section`
  max-width: 1120px;
  width: 100%;
  padding: 0 1.6rem;
  display: flex;
  flex-direction: column;


  padding-top: 7.2rem;

  h2 {
    max-width: fit-content;

    font-size: 2.4rem;
    font-weight: 400;

    margin-bottom: 2.4rem;

    @media(min-width: 1100px) {
      font-size: 4rem;
    }
  }

  .desktop {
    display: none;
  }

  @media(min-width: 1100px) {
    .mobile {
      display: none;
    }

    .desktop {
      display: flex;
      align-items: unset;
    }
  }
`;

export const PostComponent = styled.a<PostComponentProps>`
  max-width: 350px;
  width: 48%;
  overflow: hidden;
  text-decoration: none;

  border-radius: 2rem;
  box-shadow: 0.5rem 0.5rem 0.5rem rgba(0,0,0,0.2);
  margin: 1.6rem 0;

  display: flex;
  flex-direction: column;

  transition: all 0.2s;

  img {
    width: 100%;
    max-width: 350px;
    max-height: 400px;
  }

  p {
    margin: 1.6rem;
    font-weight: 500;
    color: #FF7B32;
    font-size: 2.1rem;
    line-height: 2.1rem;
    text-align: center;
  }

  & + a {
    margin-left: 5%;
  }

  &:hover {
    opacity: 0.8;
    cursor: pointer;
    transform: translateY(-8px);
  }
`;

export const Posts = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;