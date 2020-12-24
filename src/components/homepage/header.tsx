import { useCallback, useState } from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import RafaDev from '@/assets/Logo.svg';
import { FiMenu } from 'react-icons/fi';

import { Header, Menu } from '@/styles/components/header'

const HeaderComponent: React.FC = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() =>{
    setIsOpen(state => !state);
  }, []);

  return (
    <Header>
      <div>
        <a href="/">
          <img src={RafaDev}/>
        </a>

        <Menu open={isOpen}>
          <div onClick={handleOpen}>
            <a href="#about">{t('about')}</a>
            <a href="#techs">{t('techs')}</a>
            <a href="#projects">{t('projects')}</a>
            <a href="#blog">{t('blog')}</a>
            <a href="#contact">{t('contact')}</a>

            <ul>
              {router.locales.map(locale => (
                <li key={locale}>
                  <Link href={router.asPath} locale={locale}><a>{locale}</a></Link>
                </li>
              ))}
            </ul>
          </div>
          <FiMenu onClick={handleOpen} size={24}/>
        </Menu>
      </div>
    </Header>
  );
}

export default HeaderComponent;