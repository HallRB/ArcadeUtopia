import React, { useState } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import axios from "axios";
import "./index.css";


const Combat = () => {



  // Map over this.state.projects and render a project component for each one
  return (
    <div id="battleWrap">
    <div id="hpWrap">
    <Row>

      <div class="box" id="hpa">
        <div class="health-bar" data-total="100" data-value="100">
         <div class="bar">
  	      <div class="hit">
          </div>
         </div>
        </div> 
      </div>
      <div class="box" id="hpb">
        <div class="health-bar" data-total="300" data-value="300">
          <div class="bar">
  	        <div class="hit">
            </div>
          </div>
        </div>
      </div>

    </Row>
    </div>

    <Row>
      
    </Row>
    </div>
    );

}

export default Combat;