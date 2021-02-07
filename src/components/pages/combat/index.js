import React from "react";
import { Row } from "react-bootstrap";
import "./index.css";
import "../../assets/images/Knight.png";
import Knight from "./cards/avatar.js";
import Enemy from "./cards/enemy.js";
import AbilityTray from "./cards/abilities.js";
import Extra from "../../assets/misc/extra.js"



const Combat = () => {
  function playMusic () {
    var audioFight = document.getElementById("fightMusic");
    audioFight.play();
  }

  // Map over this.state.projects and render a project component for each one
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
        <div className="box" id="hpb">
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

      <div id="announcements">
        "You Win!"
        <p></p>
       
        </div>

      <div id="abilities">
        <AbilityTray></AbilityTray>
        <Extra></Extra>

      </div>
    </div>    
    );
  }



export default Combat;