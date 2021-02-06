import React, { Component } from "react";
import "./extra.css";
import BattleMusic from "../sounds/gameMusic.mp3"
import {Howl, Howler} from "howler";

const Music = [{sound: BattleMusic, label: "Begin"}]

class Extra extends Component {
    SoundPlay = (src) => {
        const sound = new Howl ({
            src})
            sound.play();
        
    }

    RenderButtonAndSound = () => {
        return Music.map((soundObj, index) => {
        return (
            <button key={index} onClick={() => this.SoundPlay(soundObj.sound)}> 
            {soundObj.label}
            </button>
        )
        })
    }
    render() {
        Howler.volume(1.0)
        return <div className="battleMusic">
        {this.RenderButtonAndSound()}
        </div>
    }
}

export default Extra