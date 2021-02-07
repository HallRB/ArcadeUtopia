import React, { Component } from 'react';
import "../cards.css"
import {Howl, Howler} from "howler";
import ArrowFire from "../../../../assets/sounds/arrow.wav";

const Music = [{sound: ArrowFire}]

class Bow extends Component {

    Sound = (src) => {
        const sound = new Howl ({
            src})
            sound.play();
        
    }

    abilityandsound = () => {
        return Music.map((soundObj, index) => {
        return (
            <button key={index} id="bow" onClick={() => this.Sound(soundObj.sound)}> 
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
export default Bow