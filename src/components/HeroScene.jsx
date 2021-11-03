import React, { Component } from 'react';
//import { useState, useEffect } from 'react';

class Heroscene extends Component {
    constructor (props) {
        var name = prompt('Input your hero name:');

        super(props);
        this.state = {
            Name: name,
            minDmgHero: 3,
            maxDmgHero: 7,
            MaxHP: 20,
            CurrentHp: 10,
            Lvl: 1,
            Kills: 0
        }

        this.handlePointsUp = this.handlePointsUp.bind(this);
        this.handleRoomRestoreHP = this.handleRoomRestoreHP.bind(this);

        global.PointsUp = this.handlePointsUp;
        global.RoomRestoreHP = this.handleRoomRestoreHP;
    }

    componentDidMount(){
        document.getElementsByClassName('AttackButton')[0].setAttribute('disabled', true);
        
    }

    handlePointsUp = points => {
        var tmpL = this.state.Lvl;
        var tmpP = this.state.Kills + points;

        this.setState({Kills : tmpP});
        while (tmpL * 5 < tmpP) {
            this.setState({Lvl : ++tmpL});
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
        document.getElementsByClassName('AttackButton')[0].setAttribute('disabled', true);
    }

    render() {
        return (
            <section className="ActField Hero">
                    <div className="Bio">
                    <div className="Name">{this.state.Name}</div>
                    <img src="http://placekitten.com/200/300" alt="avatar"/>
                </div>
                <div className="FightBoard">
                    <div className="PowerSum">
                        <span className="Power">-</span>
                        <span className="Power">-</span>
                        <span className="Power">-</span>
                    </div>
                    <button className="AttackButton" id="fck" onClick={() => global.SceneHandleClick()}>Searching...</button>
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
