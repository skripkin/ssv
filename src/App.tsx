import React from 'react';
import AppPage from './appPage';
import Description from './description';
import {
  Header,
  Icon,
  HeaderBackground,
  CloudImage,
  CenterImage,
  Step,
  SideButton,
  Slider,
  Button,
  UsMapContacts,
} from './components';
import {
  Container,
  ModalWrapper,
  HeaderLogo,
  Fond,
  Applic,
  CloudBackground,
  UsBenefits,
  PhotoSlide,
  TextInTheMiddle,
  CardsStep,
  OurReview,
  SliderSlide,
  LeaveFeedbackButton,
  Map,
  UsMap_Contacts,
} from './style';

const CONTACTS_ITEMS = [
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
      <HeaderLogo className="wrapper">
        <Header image="./salem.png" contacts={CONTACTS_ITEMS} />
      </HeaderLogo>
      <Fond>
        <CloudBackground>
          <CloudImage image="./cloud.png" />
        </CloudBackground>
        <Applic>
          <HeaderBackground />
        </Applic>
      </Fond>
      <UsBenefits className="wrapper">
        <Description />
      </UsBenefits>
      <PhotoSlide>
        <CenterImage
          title="О проекте «Английский центр»"
          subTitle="Обучение английскому языку на высоком уровне качества через курсы, разговорные клубы, ресурсный центр и общение с носителями английского языка"
        />
      </PhotoSlide>
      <TextInTheMiddle>
        <div>
          <p>ЧТО НУЖНО СДЕЛАТЬ</p>
          ЧТОБЫ ПОПАСТЬ НА КУРСЫ
        </div>
      </TextInTheMiddle>
      <CardsStep className="wrapper">
        <Step
          title="Шаг 1"
          subTitle="определить уровень"
          onClick={() => null}
        />
        <Step
          title="Шаг 2"
          subTitle="выбрать расписание"
          onClick={() => null}
        />
        <Step
          title="Шаг 3"
          subTitle="зарегистрироваться"
          onClick={() => null}
        />
        <Step title="Шаг 4" subTitle="оплатить курс" onClick={() => null} />
        <Step title="Шаг 5" subTitle="изучать язык" onClick={() => null} />
      </CardsStep>
      <OurReview>
        <div>Наши отзывы</div>
      </OurReview>
      <SliderSlide className="wrapper">
        <Slider />
      </SliderSlide>
      <LeaveFeedbackButton>
        <Button title="Оставить отзыв" onClick={() => null} />
      </LeaveFeedbackButton>
      <Map>
        <UsMap_Contacts>
          <UsMapContacts
            contacts={USCONTACTS_ITEMS}
            onClick={() => null}
            title="Наши контакты"
            findUsButtonTitle="Задайте вопрос"
            contactUsButtonTitle="Найти нас здесь"
          />
        </UsMap_Contacts>
      </Map>
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
