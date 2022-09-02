import React from "react";
import { Button, Icon } from "./components";

function App() {
  return (
    <div>
      <div style={{ margin: 25 }}>
        <Button title="Test button title" onClick={() => null} />
      </div>
      <div>" СТрелка "<Icon.Arrow /></div>
      <div>" Instagramm " <Icon.Instagramm /></div> 
      <div> " Phone "<Icon.Phone /></div>  
      <div> " Location "<Icon.Location /></div>
      <div> " Time "<Icon.Time /></div>
      <div> " 2gis "<Icon.Gis2 /></div>
      <div> " Arrow2 "<Icon.Arrow2 /></div>
      <div> " Color Watsapp "<Icon.WatsappColor /></div>
      <div>" Watsapp " <Icon.Watsapp /> </div>  
      <div>" Youtube " <Icon.Youtube /> </div>
      <div>" Play " <Icon.Play /> </div> 
      <div>" Rectangle " <Icon.Rectangle /> </div>
      <div>" Correct " <Icon.Correct /> </div>        
    </div>
  );
}

export default App;
  