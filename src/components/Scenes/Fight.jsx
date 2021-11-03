import React, { Component } from 'react';

var Enemies = [];
    Enemies[0] = {
        Name: "Spider",
        Lvl: 1,
        minDmgHero: 1,
        maxDmgHero: 3,
        MaxHP: 10,
        CurrentHp: 10
    }
    Enemies[1] = {
        Name: "Snake",
        Lvl: 2,
        minDmgHero: 2,
        maxDmgHero: 6,
        MaxHP: 15,
        CurrentHp: 15
    }
    Enemies[2] = {
        Name: "Skeleton",
        Lvl: 3,
        minDmgHero: 3,
        maxDmgHero: 9,
        MaxHP: 20,
        CurrentHp: 20
    }


class Fight extends Component {
    constructor (props) {
        super(props);

        this.state = {
            enemy : Enemies[Math.floor(Math.random() * 2)],
        }
    }


    componentDidMount(){
        document.getElementsByClassName('AttackButton')[0].removeAttribute('disabled');
        this.ExitFight();
    }
    componentWillUnmount(){
        console.log(2)
        document.getElementsByClassName('AttackButton')[0].setAttribute('disabled', true);
        document.getElementsByClassName('AttackButton')[0].innerHTML = "Searching...";
        global.RoomRestoreHP();
    }
    

    ExitFight = () => {
        document.getElementsByClassName('AttackButton')[0].innerHTML = "Move next";
        //document.getElementsByClassName('AttackButton')[0].onclick = () => {global.SceneHandleClick()};
    }
    SwitchLoat = () => {
        window.onload = () => {
            document.getElementById('trans').classList.toggle("Active");
        }
    }
    
    render() {
        this.SwitchLoat();

        return (
            <section className="ActField Enemy">
                <div className="Bio">
                <div className="Name">{this.state.enemy.Name}</div>
                <img src="http://placekitten.com/500/300" alt="avatar"/>
            </div>
            <div className="FightBoard">
                <div className="PowerSum">
                    <span className="Power">-</span>
                    <span className="Power">-</span>
                    <span className="Power">-</span>
                </div>
            </div>
            <div className="Stats">
                <div className="StatRow">
                    <span className="StatName">Level </span>
                    <span className="StatValue">{this.state.enemy.Lvl}</span>
                </div>
                <div className="StatRow">
                    <span className="StatName">Damage </span>
                    <span className="StatValue">{this.state.enemy.minDmgHero}-{this.state.enemy.maxDmgHero}</span>
                </div>
                <div className="StatRow">
                    <span className="StatName">Health </span>
                    <span className="StatValue">{this.state.enemy.CurrentHp} out of {this.state.enemy.MaxHP}</span>
                </div>
            </div>
            </section>
        );
    }
}

export default Fight;
