import React, { Component } from 'react';
import "../cards.css"
import {Howl, Howler} from "howler";
import ArrowFire from "../../../../assets/sounds/arrow.wav";

const Music = [{sound: ArrowFire}]
var myHP = 100;
var enemyHP = 300;
class Bow extends Component {

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
            var bowdamage = Math.floor((Math.random() * 8)) + strength;
            console.log("you did " + bowdamage + " damage");
        }
        enemyHP -= bowdamage;
        var bossbowdamage = Math.floor((Math.random() * 6) + 1);
        myHP -= bossbowdamage;
        
        console.log("the enemy took " + bowdamage + " damage")
        console.log("you received " + bossbowdamage + " damage")
        console.log(myHP);
        console.log(enemyHP);
        document.getElementById("bowdamage").innerHTML = bossbowdamage;
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