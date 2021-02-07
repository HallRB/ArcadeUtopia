import React, { Component } from 'react';
import "./abilities/sword"
import Sword from "./abilities/sword.js";
import Heal from "./abilities/heal.js";
class AbilityTray extends Component {
    render() {
        return(
            <div id="tray">
                <div class="ability" id="abi1"><Sword></Sword></div>
                <div class="ability" id="abi2"><Heal></Heal></div>
                <div class="ability" id="abi3"></div>
                <div class="ability" id="abi4"></div>
                <div class="ability" id="abi5"></div>
            </div>
        )
    }
}
export default AbilityTray