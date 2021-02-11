import React from "react";
import "../combat/index.css";
import BattleZone from "../combat/cards/battlezone";

const Character = () => {

    return (
        <div id="battleWrap">
          <div id="hpWrap">
 
          </div>
    
          <div id="centerWrap">

          <div><BattleZone></BattleZone></div>

          </div>
    
          <div id="announcements"></div>
            <p></p>
    

        </div>    
        );
      }

export default Character;