import React from 'react';
import { ButtonStyled } from './styles';

export const Button = ({ backgroundColor, color, children, ...props }) => {
  return (
    <ButtonStyled backgroundColor={backgroundColor} color={color} {...props}>
      {children}
    </ButtonStyled>
  );
};
