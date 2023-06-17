import React, { useMemo } from 'react';

import { List } from './styles';
import { TechItem } from 'components';

export const TechsList = ({ data, ...props }) => {
  const techsImages = useMemo(() => {
    return data.map(({ fields: { name, image, url } }) => (
      <li key={name}>
        <TechItem name={name} image={image} url={url} />
      </li>
    ));
  }, [data]);

  return <List {...props}>{techsImages}</List>;
};
