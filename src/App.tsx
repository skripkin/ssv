import React from 'react';
import { STEPS, USADVANTAGES_ITEMS, CONTACTS_ITEMS } from './mock';
import {
  Header,
  HeaderBackground,
  CloudImage,
  AboutUs,
  CenterImage,
  Step,
  Slider,
  Button,
} from './components';
import * as Styles from './style';

const App = () => {
  return (
    <Styles.Container>
      <Styles.HeaderLogo className="wrapper">
        <Header image="./salem.png" contacts={CONTACTS_ITEMS} />
      </Styles.HeaderLogo>
      <Styles.Fond>
        <Styles.CloudBackground>
          <CloudImage image="./cloud.png" />
        </Styles.CloudBackground>
        <div>
          <HeaderBackground />
        </div>
      </Styles.Fond>
      {/* <Styles.UsBenefits className="wrapper">
        <AboutUs usAdvantages={USADVANTAGES_ITEMS} />
      </Styles.UsBenefits> */}
      {/* <div>
        <CenterImage
          title="О проекте «Английский центр»"
          subTitle="Обучение английскому языку на высоком уровне качества через курсы, разговорные клубы, ресурсный центр и общение с носителями английского языка"
        />
      </div> */}
      <Styles.TextInTheMiddle>
        <div>
          <p>ЧТО НУЖНО СДЕЛАТЬ</p>
          ЧТОБЫ ПОПАСТЬ НА КУРСЫ
        </div>
      </Styles.TextInTheMiddle>
      {/* <Styles.CardsStep className="wrapper">
        {STEPS.map((item, index) => (
          <Step
            key={`${item.title}-${index}`}
            title={item.title}
            subTitle={item.subTitle}
            onClick={() => null}
          />
        ))}
      </Styles.CardsStep> */}
      <Styles.OurReview>
        <div>Наши отзывы</div>
      </Styles.OurReview>
      <Styles.SliderSlide className="wrapper">
        <Slider />
      </Styles.SliderSlide>
      <Styles.LeaveFeedbackButton>
        <Button title="Оставить отзыв" onClick={() => null} />
      </Styles.LeaveFeedbackButton>
      <Styles.MapContainer>
        <Styles.Map>
          <Styles.UsMapContactsContainer>
            <Styles.StyledMapContacts
              contacts={CONTACTS_ITEMS}
              onClick={() => null}
              title="Наши контакты"
              findUsButtonTitle="Задайте вопрос"
              contactUsButtonTitle="Найти нас здесь"
            />
          </Styles.UsMapContactsContainer>
        </Styles.Map>
      </Styles.MapContainer>
    </Styles.Container>
  );
};

export default App;
