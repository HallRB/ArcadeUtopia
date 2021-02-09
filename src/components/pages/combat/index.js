import React from "react";
import { Row } from "react-bootstrap";
import "./index.css";
import "../../assets/images/Knight.png";
import Knight from "./cards/avatar.js";
import Enemy from "./cards/enemy.js";
import AbilityTray from "./cards/abilities.js";
import Extra from "../../assets/misc/extra.js"



const Combat = () => {

  var myHP = 100;
  var enemyHP = 300;

  return (
    <div id="battleWrap">
      <div id="hpWrap">
      <Row>
        <div className="box" id="hpa">
          <div className="health-bar" data-total="100" data-value="100">
          <div className="bar">
            <div className="hit">
            </div>
          </div>
          </div> 
        </div>

        <div className="box" id="hpb" value="300">
          <div className="health-bar" data-total="300" data-value="300">
            <div className="bar">
              <div className="hit">
              </div>
            </div>
          </div>
        </div>
      </Row>
      </div>

      <div id="centerWrap">
      <Knight></Knight>
      <div></div>
      <Enemy></Enemy>
      </div>

      <div id="announcements"></div>
        <p></p>

      <div id="abilities">
        <AbilityTray></AbilityTray>
        <Extra></Extra>
        <div class="spelleffects" id="sworddamage">0</div>
        <div class="spelleffects" id="bowdamage">0</div>
        <div class="spelleffects" id="reflected">0</div>
        <div class="spelleffects" id="firedamage">0</div>
        <div class="spelleffects" id="healingdone">0</div>
      </div>
    </div>    
    );
  }



export default Combat;