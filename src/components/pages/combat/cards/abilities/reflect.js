import React, { Component } from 'react';
import "../cards.css"
import {Howl, Howler} from "howler";
import {getMyHP, getEnemyHP, setMyHP, setEnemyHP} from './countHP';
import Reflect from "../../../../assets/sounds/shieldreflect.wav";

const Music = [{sound: Reflect}]
var myHP = getMyHP();
var enemyHP = getEnemyHP();
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
            console.log(" __________________________ ")
            console.log("you reflected " + damage + " damage");
        }
        enemyHP -= damage;
        var bossdamage = Math.floor((Math.random() * 10) + 1);
        myHP -= bossdamage;

        setMyHP(myHP);
        setEnemyHP(enemyHP);
        document.getElementById("hpa").innerHTML=myHP;    
        document.getElementById("hpb").innerHTML=enemyHP;   

        console.log("the enemy took " + damage + " damage")
        console.log("you received " + bossdamage + " damage")
        console.log("your health is " + myHP);
        console.log("your enemy's health is " + enemyHP);
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