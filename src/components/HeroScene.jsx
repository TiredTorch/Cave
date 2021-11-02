import React, { Component } from 'react';

class Heroscene extends Component {
    constructor (props) {
        super(props);
        this.state = {
            Name: "TiredTorch",
            minDmgHero: 3,
            maxDmgHero: 10,
            MaxHP: 20,
            CurrentHp: 20,
            Lvl: 1,
            Kills: 0
        }
    }

    componentDidMount(){
        document.getElementsByClassName('AttackButton')[0].setAttribute('disabled', true);
    }

    PointsUp = points => {
        var tmpL = this.state.Lvl;
        var tmpP = this.state.Kills + points;

        this.setState({Kills : tmpP});
        while (tmpL * 5 < tmpP) {
            this.setState({Lvl : ++tmpL});
        }
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
