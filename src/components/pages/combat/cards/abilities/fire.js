import React, { Component } from 'react';
import "../cards.css"
import {Howl, Howler} from "howler";
import ArrowFire from "../../../../assets/sounds/fireball.wav";

const Music = [{sound: ArrowFire}]

class Fire extends Component {

    Sound = (src) => {
        const sound = new Howl ({
            src})
            sound.play();
        
    }

    abilityandsound = () => {
        return Music.map((soundObj, index) => {
        return (
            <button key={index} id="fire" onClick={() => this.Sound(soundObj.sound)}> 
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

export default Fire