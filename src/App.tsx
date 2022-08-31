import React from "react";
import { Button } from "./components";
import {colors} from "./constants";

function App() {
  return (
    <div>
      <div style={{ margin: 25 }}>
        <Button title="Test button title" onClick={() => null} />
      </div>

        colors.black
      <div style={{ width: 250, height: 25, backgroundColor: colors.black }} />
        colors.white
      <div style={{ width: 250, height: 25, border: "1px solid black", backgroundColor: colors.white }} />
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
       colors.vermilion
      <div style={{ width: 250, height: 25, backgroundColor: colors.vermilion }} />
       colors.internationalOrange
      <div style={{ width: 250, height: 25, backgroundColor: colors.internationalOrange }} />
       colors.greenPea
      <div style={{ width: 250, height: 25, backgroundColor: colors.greenPea }} />
        colors.monza
      <div style={{ width: 250, height: 25, backgroundColor: colors.monza }} />

    </div>
  );
}

export default App;
