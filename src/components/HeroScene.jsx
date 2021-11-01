import React, { Component } from 'react';

class Heroscene extends Component {
    render() {
        return (
            <section className="ActField Hero">
                    <div className="Bio">
                    <div className="Name">TiredTorch</div>
                    <img src="http://placekitten.com/200/300" alt="avatar"/>
                </div>
                <div className="FightBoard">
                    <div className="PowerSum">
                        <span className="Power">-</span>
                        <span className="Power">-</span>
                        <span className="Power">-</span>
                    </div>
                    <button className="AttackButton">Attack</button>
                </div>
                <div className="Stats">
                    <div className="StatRow">
                        <span className="StatName">Level</span>
                        <span className="StatValue"></span>
                    </div>
                    <div className="StatRow">
                        <span className="StatName">Kills</span>
                        <span className="StatValue"></span>
                    </div>
                    <div className="StatRow">
                        <span className="StatName">Damage</span>
                        <span className="StatValue"></span>
                    </div>
                    <div className="StatRow">
                        <span className="StatName">Health</span>
                        <span className="StatValue"></span>
                    </div>
                </div>
            </section>
        );
    }
}

export default Heroscene;
