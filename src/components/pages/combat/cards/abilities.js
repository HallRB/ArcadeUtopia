import React, { Component } from 'react';
import "./cards.css"

class AbilityTray extends Component {
    render() {
        return(
            <div id="tray">
                <div class="ability" id="abi1"></div>
                <div class="ability" id="abi2"></div>
                <div class="ability" id="abi3"></div>
                <div class="ability" id="abi4"></div>
                <div class="ability" id="abi5"></div>
            </div>
        )
    }
}
export default AbilityTray