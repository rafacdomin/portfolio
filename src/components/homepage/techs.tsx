import useTranslation from 'next-translate/useTranslation';
import { Document } from 'prismic-javascript/types/documents';

import { Container, List, Tech } from '@/styles/components/techs';

interface ITechs {
  techs: Document[];
}

export default function techs({ techs }: ITechs) {
  const { t } = useTranslation('common');

  return <Container id="techs">
    <h2>{t('techs').toUpperCase()}</h2>

    <List>
      {techs.map(tech => (
        <li key={tech.uid}>
          <a href={tech.data.url.url} target="_blank">
            <Tech src={tech.data.image.url}/>
            <span>{tech.data.name[0].text}</span>
          </a>
        </li>
      ))}
    </List>
  </Container>;
}