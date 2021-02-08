import React, { Component } from 'react';
import "../cards.css"
import {Howl, Howler} from "howler";
import Healing from "../../../../assets/sounds/healing.wav";

const Music = [{sound: Healing}]
var myHP = 100;
var enemyHP = 300;
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
            if (myHP<=0) 
            { document.getElementById("announcements").innerHTML="You Lose!";
            return;      
        } else if (enemyHP<=0) 
             { document.getElementById("announcements").innerHTML="You Win!"
        } else 
        {   var spirit = 5
            var heal = Math.floor(((Math.random() * 4) * spirit) + 1);
        }
        var bossdamage = Math.floor((Math.random() * 15) + 1);
        myHP -= (bossdamage - heal);
        console.log("You healed yourself for " + heal + " health")
        console.log("you received " + bossdamage + " damage from the enemy")
        console.log(myHP);
        console.log(enemyHP);
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