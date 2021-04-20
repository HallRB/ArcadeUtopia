import React, { Component } from 'react';
import "./cards.css"
import { Row } from "react-bootstrap";

class HP extends Component {
    render() {
        return(
            <Row>
            <div className="ColWrap">
            <div className="Col">
          <div id="hpa" value="100" max="100">100</div>
          <div className="ColMid"></div>
          <div id="hpb" value="100" max="100">100</div>
          </div>
          </div>
          </Row>
        )
    }
}
export default HP