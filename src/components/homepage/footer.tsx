import RafaDev from '@/assets/Logo.svg';

import { Footer } from '@/styles/components/footer';

const FooterComponent: React.FC = () => {
  return <Footer>
    <img src={RafaDev} alt="Rafa DEV"/>

    <span>
      Copyright © 2020 Rafael Domingues
    </span>
  </Footer>
}

export default FooterComponent;