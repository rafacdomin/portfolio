import useTranslation from 'next-translate/useTranslation';
import { FiDownload } from 'react-icons/fi';
import aboutSVG from '@/assets/about.svg';

import { About } from '@/styles/components/about';

const AboutComponent: React.FC = () => {
  const { t } = useTranslation('about');

  return (
    <About id="about">
      <div>
        <h1>Rafael Domingues</h1>
        <p>{t('dev')}</p>

        <a href="/">
          <FiDownload size={16}/>
          Resume - ptBR
        </a>
        
        <a href="/">
          <FiDownload size={16}/>
          Resume - enUS
        </a>
      </div>

      <img src={aboutSVG} alt="about"/>
    </About>
  );
}

export default AboutComponent;