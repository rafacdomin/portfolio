import React, { useMemo } from 'react';
import Image from 'next/image';
import { useTheme } from 'styled-components';

import { StyledFooter, Color } from './styles';

export const Footer = () => {
  const {
    images: { logoSVG },
    colors: { primary, secundary, tertiary, quaternary },
  } = useTheme();

  const actualYear = useMemo(() => new Date().getFullYear(), []);

  const colors = useMemo(
    () => (
      <>
        <Color color={primary} />
        <Color color={secundary} />
        <Color color={tertiary} />
        <Color color={quaternary} />
      </>
    ),
    [primary, secundary, tertiary, quaternary]
  );

  return (
    <StyledFooter>
      <div>
        <div>
          <Image src={logoSVG} alt="Rafa Dev" />
          Copyright © {actualYear} Rafael Domingues
        </div>
      </div>

      <ul>{colors}</ul>
    </StyledFooter>
  );
};
