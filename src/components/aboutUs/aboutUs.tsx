import React from "react";
import UsAdvantages, { IUsAdvantagesProp } from "../usAdvantages/usAdvantages";
import {Components, UsAdvantage } from "./style";

interface IAboutUsProp {
  usAdvantages: IUsAdvantagesProp[];
}

const AboutUs = ({usAdvantages }: IAboutUsProp) => {
  return (
      <Components>
        {usAdvantages.map((item, index) => (
            <UsAdvantage key={`${item.title}-${index}`}>
                <UsAdvantages image={item.image} title={item.title} subTitle={item.subTitle} />
            </UsAdvantage>
        ))}
      </Components>
  );
};

export default AboutUs;