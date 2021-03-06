import { useCallback, useState } from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import RafaDev from '@/assets/Logo.svg';
import { FiMenu, FiChevronDown } from 'react-icons/fi';

import { Header, Menu, OpenMenu } from '@/styles/components/header'

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
          <div onClick={() => setIsOpen(false)}>
            <a href="#about">{t('about')}</a>
            <a href="#techs">{t('techs')}</a>
            <a href="#projects">{t('projects')}</a>
            <a href="#blog">{t('blog')}</a>
            <a href="#contact">{t('contact')}</a>

            <ul>
              {router.locales.map(locale => (
                <li key={locale}>
                  <img src={`${t(`${locale}`)}.png`} alt={locale}/>
                  <Link href={router.asPath} locale={locale}><a>{t(`${locale}`)}</a></Link>
                </li>
              ))}
            </ul>
          </div>
          <FiMenu onClick={handleOpen} size={24}/>
          <OpenMenu onClick={handleOpen}>
            <img src={`${t(`${router.locale}`)}.png`} alt={router.locale}/>
            <FiChevronDown size={24}/>
          </OpenMenu>
        </Menu>
      </div>
    </Header>
  );
}

export default HeaderComponent;