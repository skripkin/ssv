import React from 'react';
import AppPage from './appPage';
import { USADVANTAGES_ITEMS } from './mock';
import { CONTACTS_ITEMS } from './mock';
import {
  Header,
  HeaderBackground,
  CloudImage,
  AboutUs,
  CenterImage,
  Step,
  SideButton,
  Slider,
  Button,
} from './components';
import {
  Container,
  ModalWrapper,
  HeaderLogo,
  Fond,
  CloudBackground,
  UsBenefits,
  TextInTheMiddle,
  CardsStep,
  OurReview,
  SliderSlide,
  LeaveFeedbackButton,
  StyledMapContacts,
  UsMap_Contacts,
  Map,
  MapContainer,
} from './style';

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
        <div>
          <HeaderBackground />
        </div>
      </Fond>
      <UsBenefits className="wrapper">
        <AboutUs usAdvantages={USADVANTAGES_ITEMS} />
      </UsBenefits>
      <div>
        <CenterImage
          title="О проекте «Английский центр»"
          subTitle="Обучение английскому языку на высоком уровне качества через курсы, разговорные клубы, ресурсный центр и общение с носителями английского языка"
        />
      </div>
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
      <MapContainer>
        <Map>
          <UsMap_Contacts>
            <StyledMapContacts
              contacts={CONTACTS_ITEMS}
              onClick={() => null}
              title="Наши контакты"
              findUsButtonTitle="Задайте вопрос"
              contactUsButtonTitle="Найти нас здесь"
            />
          </UsMap_Contacts>
        </Map>
      </MapContainer>
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
