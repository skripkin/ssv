import React from 'react';
import AppPage from './appPage';
import {
  Header,
  Icon,
  HeaderBackground,
  CloudImage,
  UsAdvantages,
  CenterImage,
  Step,
  SideButton,
  Slider,
  Button,
  AboutUs,
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
  MapAndRegistration,
  OurContacts,
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
        <CloudBackground>
          <CloudImage image="./cloud.png" />
        </CloudBackground>
        <Applic>
          <HeaderBackground />
        </Applic>
      </Fond>
      <UsBenefits>
        <UsAdvantages
          title="МАТЕРИАЛ"
          subTitle="Излагается простым и понятным языком"
          image="./png1.png"
        />
        <UsAdvantages
          title="ТЕХНОЛОГИИ"
          subTitle="В обучении используются передовые технологии"
          image="./gear.png"
        />
        <UsAdvantages
          title="ОБУЧЕНИЕ"
          subTitle="группах не более 12 человек"
          image="./12.png"
        />
        <UsAdvantages
          title="ПРЕДОСТАВЛЯЮТСЯ"
          subTitle="Готовые методические пособия"
          image="./magazines.png"
        />
        <UsAdvantages
          title="ПРАКТИКА"
          subTitle="Полученные знания закрепляются на практике"
          image="./practice.png"
        />
      </UsBenefits>
      <PhotoSlide>
        <CenterImage
          title="О проекте <<Английский центр>>"
          subTitle="Обучение английскому языку на высоком уровне качества через курсы, разговорные клубы, ресурсный центр и общение с носителями английского языка"
        />
      </PhotoSlide>
      <TextInTheMiddle>
        <div>
          <p>ЧТО НУЖНО СДЕЛАТЬ</p>
          ЧТОБЫ ПОПАСТЬ НА КУРСЫ
        </div>
      </TextInTheMiddle>
      <CardsStep>
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
      <SliderSlide>
        <Slider />
      </SliderSlide>
      <LeaveFeedbackButton>
        <Button title="Оставить отзыв" onClick={() => null} />
      </LeaveFeedbackButton>
      <MapAndRegistration>
        <AboutUs usAdvantages={USADVANTAGES_ITEMS} />
        <OurContacts>
          <UsMapContacts
            contacts={USCONTACTS_ITEMS}
            onClick={() => null}
            title="Наши контакты"
            findUsButtonTitle="Задайте вопрос"
            contactUsButtonTitle="Найти нас здесь"
          />
        </OurContacts>
      </MapAndRegistration>
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
