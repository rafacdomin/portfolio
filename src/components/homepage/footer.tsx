import { useMemo } from 'react';
import RafaDev from '@/assets/Logo.svg';

import { Footer } from '@/styles/components/footer';

const FooterComponent: React.FC = () => {
  const getYear = useMemo(() => new Date().getFullYear(),[]);

  return <Footer>
    <img src={RafaDev} alt="Rafa DEV"/>

    <span>
      Copyright © {getYear} Rafael Domingues
    </span>
  </Footer>
}

export default FooterComponent;