import React, { Component } from 'react';
//import { useState, useEffect } from 'react';

async function lock(){
    if(document.documentElement.requestFullscreen.Model)
		document.querySelector("#container").requestFullscreen();
	else if(document.documentElement.webkitRequestFullScreen.Model)
		document.querySelector("#container").webkitRequestFullScreen();

	window.screen.orientation.lock("landscape-primary")
		
}

class Heroscene extends Component {
    constructor (props) {
        var name = prompt('Input your hero name:');

        super(props);
        this.state = {
            Name: (name === '' || name === null ? "Unnamed Hero" : name),
            minDmgHero: 4,
            maxDmgHero: 5,
            MaxHP: 20,
            CurrentHp: 20,
            Lvl: 1,
            Kills: 0
        }

        this.handlePointsUp = this.handlePointsUp.bind(this);
        this.handleRoomRestoreHP = this.handleRoomRestoreHP.bind(this);
        this.StartFight = this.StartFight.bind(this);

        global.PointsUp = this.handlePointsUp;
        global.RoomRestoreHP = this.handleRoomRestoreHP;
        global.Fight = this.StartFight;
    }

    componentDidMount(){
        lock();
        document.getElementsByClassName('AttackButton')[0].setAttribute('disabled', true);
        
    }

    handlePointsUp = points => {
        var tmpL = this.state.Lvl;
        var tmpP = this.state.Kills + points;

        this.setState({Kills : tmpP});
        while (tmpL * 5 < tmpP) {
            this.setState({
                Lvl : ++tmpL,
                MaxHP : this.state.MaxHP + 3
            });
            this.handleDmgControl();
        }
    }
    handleRoomRestoreHP = () => {
        if(this.state.CurrentHp + 3 <= this.state.MaxHP){
            this.setState({CurrentHp : this.state.CurrentHp + 3});
        } else{
            this.setState({CurrentHp : this.state.MaxHP});
        }
        
    }
    handleDmgControl = () => {
        if (this.state.Lvl % 2 === 0){
            this.setState({minDmgHero : this.state.minDmgHero + 1});
        } else{
            this.setState({maxDmgHero : this.state.maxDmgHero + 1});
        }
    }

    StartFight = () => {
        document.getElementsByClassName('AttackButton')[0].innerHTML = "Attack!";
    }

    Kick = () => {
        

        var DMGarr = document.getElementsByClassName("Power");
        let button = document.getElementsByClassName("AttackButton")[0];
        button.setAttribute('disabled', true);
        for (let i = 0; i < 6; i++) {
            DMGarr[i].innerHTML = '-';
        }

        var HeroAttacks = new Array(3);
        for (let i = 3; i < 6; i++) {
            HeroAttacks[i - 3] = Math.floor(
                this.state.minDmgHero + Math.random() * 
                (this.state.maxDmgHero - this.state.minDmgHero + 1)
            );
            setTimeout(() => {
                DMGarr[i].innerHTML = HeroAttacks[i - 3]
            }, (i - 2) * 500);
        }
        var AllHeroDmg = HeroAttacks.reduce((sum, elem) => {return sum + elem});
        setTimeout(() => {
            document.getElementById("mgi").style.webkitFilter = "invert(0%)";
            global.enemyKick();
        }, 2000)

        setTimeout(() => {
            button.removeAttribute('disabled')
            this.CompareDmg(AllHeroDmg, global.enemyDmg())
            if(global.CheckDeath()){             
                let button = document.getElementsByClassName("AttackButton")[0];
                button.setAttribute('disabled', true);
                button.innerHTML = "Battle ends..";
                global.PointsUp(Math.floor(Math.random() * 10) + 1);
                setTimeout(() => {
                    console.log(333)
                    
                    global.SceneHandleClick()
                }, 1000)
            }
        }, 4000)
    }
    CompareDmg = (hero, enemy) => {
        var def = hero - enemy
        if(def < 0){
            this.Hurt(def * -1)
        }else if(def > 0){
            global.enemyHurt(def)
        }
    }
    Hurt = dmg => {
        
        document.getElementById("mgi").style.transition = "all .3s";
        document.getElementById("mgi").style.webkitFilter = "invert(100%)";
        this.setState({CurrentHp : this.state.CurrentHp - dmg});
        if (this.state.CurrentHp <= 0) {
            this.Death()
        }
    }
    Death = () => {
        let button = document.getElementsByClassName("AttackButton")[0];
        button.setAttribute('disabled', true);
        button.innerHTML = "Restart your page";
        this.setState({
            Name: "Dead",
        })
        document.getElementById("mgi").style.transition = "all .3s";
        document.getElementById("mgi").style.webkitFilter = "grayscale(90%)";
    }

    render() {
        return (
            <section className="ActField Hero">
                    <div className="Bio">
                    <div className="Name">{this.state.Name}</div>
                    <img id='mgi' src='https://lh3.googleusercontent.com/flLZ0z2tG7Uk5iavguxeVN6rm6zgQnnwrccFfj0VeO_TVfCfkpG8bPoFXl3oIOISV63c=s89' alt="avatar"/>
                </div>
                <div className="FightBoard">
                    <div className="PowerSum">
                        <span className="Power">-</span>
                        <span className="Power">-</span>
                        <span className="Power">-</span>
                    </div>
                    <button className="AttackButton" id="fck" onClick={() => this.Kick()}>Searching...</button>
                </div>
                <div className="Stats">
                    <div className="StatRow">
                        <span className="StatName">Level </span>
                        <span className="StatValue">{this.state.Lvl}</span>
                    </div>
                    <div className="StatRow">
                        <span className="StatName">Points </span>
                        <span className="StatValue">{this.state.Kills}</span>
                    </div>
                    <div className="StatRow">
                        <span className="StatName">Damage </span>
                        <span className="StatValue">{this.state.minDmgHero}-{this.state.maxDmgHero}</span>
                    </div>
                    <div className="StatRow">
                        <span className="StatName">Health </span>
                        <span className="StatValue">{this.state.CurrentHp} out of {this.state.MaxHP}</span>
                    </div>
                </div>
            </section>
        );
    }
}

export default Heroscene;
