import React from "react";
import "./index.css";
import "../../assets/images/Knight.png";
import Knight from "./cards/avatar.js";
import Enemy from "./cards/enemy.js";
import AbilityTray from "./cards/abilities.js";
import HP from "./cards/hp.js";
import BattleZone from "./cards/battlezone";



const Combat = () => {

  return (
    <div id="battleWrap">
      <div id="hpWrap">
<HP></HP>
      </div>

      <div id="centerWrap">
      <Knight></Knight>
      <div><BattleZone></BattleZone></div>
      <Enemy></Enemy>
      </div>

      <div id="announcements"></div>
        <p></p>

      <div id="abilities">
        <AbilityTray></AbilityTray>
      </div>
    </div>    
    );
  }



export default Combat;