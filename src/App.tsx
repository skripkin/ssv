import React from "react";
import { Button, Contacts, Icon, UsAdvantages } from "./components";
import { colors } from "./constants";

function App() {
  return (
    <div>
      <div style={{ margin: 25 }}>
        <Button title="Подробнее" onClick={() => null} />
      </div>
      <div style={{ margin: 10 }}>
        <Contacts title="11111111" subTitle="12345" icon={<Icon.Phone />} />
      </div>
      <div style={{ margin: 10 }}>
        <UsAdvantages title="777777" subTitle="8888888888" image="./png1.png" />
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
    </div>
  );
}

export default App;
