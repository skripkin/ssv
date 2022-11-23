import { AboutUs } from './components';

const USADVANTAGES_ITEMS = [
  {
    image: './png1.png',
    title: 'МАТЕРИАЛ',
    subTitle: 'Излагается простым и понятным языком',
  },
  {
    title: 'ТЕХНОЛОГИИ',
    subTitle: 'В обучении используются передовые технологии',
    image: './gear.png',
  },
  {
    title: 'ОБУЧЕНИЕ',
    subTitle: 'группах не более 12 человек',
    image: './12.png',
  },
  {
    title: 'ПРЕДОСТАВЛЯЮТСЯ',
    subTitle: 'Готовые методические пособия',
    image: './magazines.png',
  },
  {
    title: 'ПРАКТИКА',
    subTitle: 'Полученные знания закрепляются на практике',
    image: './practice.png',
  },
];

const Description = () => {
  return <AboutUs usAdvantages={USADVANTAGES_ITEMS} />;
};

export default Description;
