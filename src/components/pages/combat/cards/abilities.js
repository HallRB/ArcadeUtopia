import React, { Component } from 'react';
import "./abilities/sword"
import Sword from "./abilities/sword.js";
import Heal from "./abilities/heal.js";
import Fire from "./abilities/fire.js";
import Shield from "./abilities/reflect";
import Bow from "./abilities/bow";


class AbilityTray extends Component {
    render() {
        return(
            <div id="tray">
                <div class="ability" id="abi1"><Sword></Sword></div>
                <div class="ability" id="abi2"><Bow></Bow></div>
                <div class="ability" id="abi3"><Shield></Shield></div>
                <div class="ability" id="abi4"><Fire></Fire></div>
                <div class="ability" id="abi5"><Heal></Heal></div>
            </div>
        )
    }
}
export default AbilityTray