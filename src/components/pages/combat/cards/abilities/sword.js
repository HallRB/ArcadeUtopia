import React, { Component } from 'react';
import "../cards.css";
import {Howl, Howler} from "howler";
import SwordSwipe from "../../../../assets/sounds/swordswipe.wav";

const Music = [{sound: SwordSwipe}]
var myHP = 100;
var enemyHP = 300;

class Sword extends Component {

    
     Attack = () => {

    
    }
    Sound = (src) => {
        const sound = new Howl ({
            src})
            sound.play();
                if (myHP<=0) 
                    { document.getElementById("announcements").innerHTML="You Lose!";     
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
            <button key={index} id="sword" onClick={() => this.Sound(soundObj.sound)}> 
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