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
                <div className="ability" id="abi1"><Sword></Sword></div>
                <div className="ability" id="abi2"><Bow></Bow></div>
                <div className="ability" id="abi3"><Shield></Shield></div>
                <div className="ability" id="abi4"><Fire></Fire></div>
                <div className="ability" id="abi5"><Heal></Heal></div>
            </div>
        )
    }
}
export default AbilityTray