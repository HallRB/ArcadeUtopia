import React, { Component } from 'react';
import "../cards.css"
import {Howl, Howler} from "howler";
import Healing from "../../../../assets/sounds/healing.wav";

const Music = [{sound: Healing}]

class Heal extends Component {

    // Healgif = () => {
    //     const avatar = document.getElementById("knight");
    //     const neutral = "../../../../assets/images/Knight.png";
    //     const heal = "../../../../assets/images/Heal.png";
        
    // }

    Sound = (src) => {
        const sound = new Howl ({
            src})
            sound.play();
        
    }

    abilityandsound = () => {
        return Music.map((soundObj, index) => {
        return (
            <button key={index} id="heal" onClick={() => this.Sound(soundObj.sound)}> 
            </button>
        )
        })
    }
    render() {
        Howler.volume(4.0)
        return <div className="sound">
        {this.abilityandsound()}
        </div>
    }
}

export default Heal