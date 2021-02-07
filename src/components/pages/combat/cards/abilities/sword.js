import React, { Component } from 'react';
import "../cards.css";
import {Howl, Howler} from "howler";
import SwordSwipe from "../../../../assets/sounds/swordswipe.wav";

const Music = [{sound: SwordSwipe}]

class Sword extends Component {

    SwordSound = (src) => {
        const sound = new Howl ({
            src})
            sound.play();
        
    }

    abilityandsound = () => {
        return Music.map((soundObj, index) => {
        return (
            <button key={index} id="sword" onClick={() => this.SwordSound(soundObj.sound)}> 
            </button>
        )
        })
    }
    render() {
        Howler.volume(1.0)
        return <div className="sound">
        {this.abilityandsound()}
        </div>
    }
}
            





export default Sword