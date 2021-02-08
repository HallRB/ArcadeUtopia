import React, { Component } from 'react';
import "../cards.css"
import {Howl, Howler} from "howler";
import Reflect from "../../../../assets/sounds/shieldreflect.wav";

const Music = [{sound: Reflect}]
var myHP = 100;
var enemyHP = 300;
class Shield extends Component {

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
        {   var strength = 5;
            var damage = Math.floor((Math.random() * 12)) + strength;
            console.log("you did " + damage + " damage");
        }
        enemyHP -= damage;
        var bossdamage = Math.floor((Math.random() * 10) + 1);
        myHP -= bossdamage;
        console.log("the enemy took " + damage + " damage")
        console.log("you received " + bossdamage + " damage")
        console.log(myHP);
        console.log(enemyHP);
    }

    abilityandsound = () => {
        return Music.map((soundObj, index) => {
        return (
            <button key={index} id="shield" onClick={() => this.Sound(soundObj.sound)}> 
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
export default Shield