import React from 'react';
import AppPage from './appPage';
import {
  Header,
  Icon,
  HeaderBackground,
  CloudImage,
  Application,
  UsAdvantages,
  CenterImage,
  Step,
  Slider,
  Button,
  AboutUs,
  UsMapContacts,
  SideButton,
} from './components';
import {
  Container,
  ModalWrapper,
  HeaderLogo,
  Fond,
  CloudBackground,
  Applic,
  ButtonReview,
  CenterImg,
  StepBtn,
  About_Us,
  SliderSlide,
} from './style';

const CONTACTS_ITEMS = [
  {
    icon: <Icon.Phone />,
    title: 'Some title',
    subTitle: 'Some subtitle',
  },
  {
    icon: <Icon.Location />,
    title: 'Some title',
    subTitle: 'Some subtitle',
  },
  {
    icon: <Icon.Time />,
    title: 'Some title',
    subTitle: 'Some subtitle',
  },
];

const USADVANTAGES_ITEMS = [
  {
    image: '#',
    title: 'Some title',
    subTitle: 'Some subtitle',
  },
];

const USCONTACTS_ITEMS = [
  {
    icon: <Icon.Phone />,
    title: '+77252318732',
    subTitle: '+77053715041',
  },
  {
    icon: <Icon.Location />,
    title: 'г. Шымкент',
    subTitle: 'ул. Чехова 7',
  },
  {
    icon: <Icon.Time />,
    title: 'с 9-00 до 18-00',
    subTitle: '(суббота, воскресенье выходной)',
  },
];

const App = () => {
  const [showComponents, setShowComponents] = React.useState(false);

  return (
    <Container>
      <div>Page here</div>
      <HeaderLogo>
        <Header image="./salem.png" contacts={CONTACTS_ITEMS} />
      </HeaderLogo>
      <Fond>
        <HeaderBackground />
      </Fond>
      <CloudBackground>
        <CloudImage image="./cloud.png" />
      </CloudBackground>
      <Applic>
        <Application
          h1="Проект “Английский центр”"
          text="Обучение английскому языку
            на высоком уровне качества через курсы, разговорные клубы,
            ресурсный центр
            и общение с носителями
            английского языка"
          image="./phone.png"
          onClick={() => null}
        />
      </Applic>
      <UsAdvantages title="777777" subTitle="8888888888" image="./png1.png" />
      <CenterImg>
        <CenterImage
          title="О проекте <<Английский центр>>"
          subTitle="Обучение английскому языку на высоком уровне качества через курсы, разговорные клубы, ресурсный центр и общение с носителями английского языка"
        />
      </CenterImg>
      <div className="WhatNeedDo">
        <h2>ЧТО НУЖНО СДЕЛАТЬ</h2>
        ЧТОБЫ ПОПАСТЬ НА КУРСЫ
      </div>
      <StepBtn>
        <Step
          title="Шаг 1"
          subTitle="определить уровень"
          onClick={() => null}
        />
      </StepBtn>
      <div className="rewev">
        <p>Наши отзывы</p>
      </div>
      <SliderSlide>
        <Slider />
      </SliderSlide>
      <ButtonReview>
        <Button title="Оставить отзыв" onClick={() => null} />
      </ButtonReview>
      <About_Us>
        <AboutUs usAdvantages={USADVANTAGES_ITEMS} />
      </About_Us>
      <UsMapContacts
        contacts={USCONTACTS_ITEMS}
        onClick={() => null}
        title="Наши контакты"
        findUsButtonTitle="Задайте вопрос"
        contactUsButtonTitle="Найти нас здесь"
      />
      <SideButton onClick={() => setShowComponents(!showComponents)} />
      {showComponents && (
        <ModalWrapper>
          <AppPage onClick={() => setShowComponents(!showComponents)} />
        </ModalWrapper>
      )}
    </Container>
  );
};

export default App;
