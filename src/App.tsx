import React from "react";
import {
  Button,
  Contacts,
  Icon,
  Step,
  UsAdvantages,
  Review,
  Header,
  CloudImage,
  HeaderBackground,
  Slider,
  Application,
  CenterImage,
  SideButton
  UsMapContacts,
  AboutUs,
} from "./components";
import { colors } from "./constants";

const USADVANTAGES_ITEMS = [
  {
    image: "#",
    title: "Some title",
    subTitle: "Some subtitle",
  },
];

const CONTACTS_ITEMS = [
  {
    icon: <Icon.Phone />,
    title: "Some title",
    subTitle: "Some subtitle",
  },
  {
    icon: <Icon.Location />,
    title: "Some title",
    subTitle: "Some subtitle",
  },
  {
    icon: <Icon.Time />,
    title: "Some title",
    subTitle: "Some subtitle",
  },
];

const USCONTACTS_ITEMS = [
  {
    icon: <Icon.Phone />,
    title: "+77252318732",
    subTitle: "+77053715041",
  },
  {
    icon: <Icon.Location />,
    title: "г. Шымкент",
    subTitle: "ул. Чехова 7",
  },
  {
    icon: <Icon.Time />,
    title: "с 9-00 до 18-00",
    subTitle: "(суббота, воскресенье выходной)",
  },
];

const App = () => {
  return (
    <div>
   
      <div>
        <CenterImage
          title="О проекте <<Английский центр>>"
          subTitle="Обучение английскому языку на высоком уровне качества через курсы, разговорные клубы, ресурсный центр и общение с носителями английского языка"
        />
      </div>
      <div>
        <HeaderBackground />
      </div>
      <div style={{ width: 1000 }}>
        <Slider />
      </div>
      <div style={{ background: "lightgray", margin: 25 }}>
        <Header image="./salem.png" contacts={CONTACTS_ITEMS} />
      </div>
      <div style={{ margin: 30 }}>
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
      </div>
      <div style={{ margin: 10 }}>
        <AboutUs usAdvantages={USADVANTAGES_ITEMS} />
      </div>
      <div style={{ margin: 25 }}>
        <UsMapContacts
          contacts={USCONTACTS_ITEMS}
          onClick={() => null}
          title="Наши контакты"
          findUsButtonTitle="Задайте вопрос"
          contactUsButtonTitle="Найти нас здесь"
        />
      </div>
      <div style={{ margin: 25 }}>
        <Button title="Подробнее" onClick={() => null} />
      </div>
      <div>
        <CloudImage image="./cloud.png" />
      </div>
      <div style={{ margin: 30 }}>
        <Step
          title="Шаг 1"
          subTitle="определить уровень"
          onClick={() => null}
        />
      </div>
      <div style={{ margin: 10 }}>
        <Contacts title="11111111" subTitle="12345" icon={<Icon.Phone />} />
      </div>
      <div style={{ margin: 10 }}>
        <UsAdvantages title="777777" subTitle="8888888888" image="./png1.png" />
      </div>
      <div style={{ margin: 10 }}>
        <Review
          onClick={(element: any) => console.log(element)}
          title="Венера"
          subTitle="subTitle"
          dataTime="08 september"
          image="./image9.png"
        />
      </div>
      <div style={{ display: "flex", marginBottom: 24 }}>
        <div>
          " СТрелка "<Icon.Arrow />
        </div>
        <div>
          " Instagramm " <Icon.Instagramm />
        </div>
        <div>
          {" "}
          " Phone "<Icon.Phone />
        </div>
        <div>
          {" "}
          " Location "<Icon.Location />
        </div>
        <div>
          {" "}
          " Time "<Icon.Time />
        </div>
        <div>
          {" "}
          " 2gis "<Icon.Gis2 />
        </div>
        <div>
          {" "}
          " Arrow2 "<Icon.Arrow2 />
        </div>
        <div>
          {" "}
          " Color Watsapp "<Icon.WatsappColor />
        </div>
        <div>
          " Watsapp " <Icon.Watsapp />{" "}
        </div>
        <div>
          " Youtube " <Icon.Youtube />{" "}
        </div>
        <div>
          " Play " <Icon.Play />{" "}
        </div>
        <div>
          " Rectangle " <Icon.Rectangle />{" "}
        </div>
        <div>
          " Correct " <Icon.Correct />{" "}
        </div>
      </div>

     

      colors.black
      <div style={{ width: 250, height: 25, backgroundColor: colors.black }} />
      colors.white
      <div
        style={{
          width: 250,
          height: 25,
          border: "1px solid black",
          backgroundColor: colors.white,
        }}
      />
      colors.pizazz
      <div style={{ width: 250, height: 25, backgroundColor: colors.pizazz }} />
      colors.silver
      <div style={{ width: 250, height: 25, backgroundColor: colors.silver }} />
      colors.turbo
      <div style={{ width: 250, height: 25, backgroundColor: colors.turbo }} />
      colors.broom
      <div style={{ width: 250, height: 25, backgroundColor: colors.broom }} />
      colors.alto
      <div style={{ width: 250, height: 25, backgroundColor: colors.alto }} />
      colors.tiaMaria
      <div
        style={{ width: 250, height: 25, backgroundColor: colors.tiaMaria }}
      />
      colors.vermilion
      <div
        style={{ width: 250, height: 25, backgroundColor: colors.vermilion }}
      />
      colors.internationalOrange
      <div
        style={{
          width: 250,
          height: 25,
          backgroundColor: colors.internationalOrange,
        }}
      />
      colors.greenPea
      <div
        style={{ width: 250, height: 25, backgroundColor: colors.greenPea }}
      />
      colors.monza
      <div style={{ width: 250, height: 25, backgroundColor: colors.monza }} />

      <div style={{ right: 10}}>
        <SideButton title=" " step={{title: "Шаг 1",subTitle: "определить уровень", onClick:() => null}}/>
      </div>
    </div>
    
  );
};

export default App;
