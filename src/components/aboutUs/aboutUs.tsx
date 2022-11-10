import React from 'react';
import UsAdvantages, { IUsAdvantagesProp } from '../usAdvantages/usAdvantages';
import { Components, Box } from './style';

interface IAboutUsProp {
  usAdvantages: IUsAdvantagesProp[];
}

const AboutUs = ({ usAdvantages }: IAboutUsProp) => {
  return (
    <Components>
      {usAdvantages.map((item, index) => (
        <Box key={`${item.title}-${index}`}>
          <UsAdvantages
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
          />
        </Box>
      ))}
    </Components>
  );
};

export default AboutUs;
