import { useMemo } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { FiDownload } from 'react-icons/fi';
import { Document } from 'prismic-javascript/types/documents';
import aboutSVG from '@/assets/about.svg';

import { About } from '@/styles/components/about';

interface AboutProps {
  resume: Document[];
}

const AboutComponent: React.FC<AboutProps> = ({ resume }) => {
  const { t } = useTranslation('about');

  const resumeBR = useMemo(() => {
    return resume.find(doc => doc.tags.includes('BR'));
  } ,[])

  const resumeUS = useMemo(() => {
    return resume.find(doc => doc.tags.includes('US'));
  } ,[])

  return (
    <About id="about">
      <div>
        <h1>Rafael Domingues</h1>
        <p>{t('dev')}</p>

        <a href={resumeBR.data.document.url} target="_blank">
          <FiDownload size={16}/>
          {t('resume')} - ptBR
        </a>
        
        <a href={resumeUS.data.document.url} target="_blank">
          <FiDownload size={16}/>
          {t('resume')} - enUS
        </a>

        <h3>{t('description')}</h3>
      </div>

      <img src={aboutSVG} alt="about"/>
    </About>
  );
}

export default AboutComponent;