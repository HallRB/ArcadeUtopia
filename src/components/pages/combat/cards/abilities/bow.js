import React, { Component } from 'react';
import "../cards.css"
import {Howl, Howler} from "howler";
import {getMyHP, getEnemyHP, setMyHP, setEnemyHP} from './countHP';
import ArrowFire from "../../../../assets/sounds/arrow.wav";

const Music = [{sound: ArrowFire}]
class Bow extends Component {

    Sound = (src) => {
        var myHP = getMyHP();
        var enemyHP = getEnemyHP();

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
        console.log(" __________________________ ")
            console.log("you shot the enemy for " + bowdamage + " damage");
        }
        enemyHP -= bowdamage;
        var bossbowdamage = Math.floor((Math.random() * 6) + 1);
        myHP -= bossbowdamage;

        setMyHP(myHP);
        setEnemyHP(enemyHP);
        document.getElementById("hpa").innerHTML=myHP;    
        document.getElementById("hpb").innerHTML=enemyHP;   

        console.log("the enemy took " + bowdamage + " damage")
        console.log("you received " + bossbowdamage + " damage")
        console.log("your health is " + myHP);
        console.log("your enemy's health is " + enemyHP);
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