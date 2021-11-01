import React, { Component } from 'react';

class Fight extends Component {
    render() {
        return (
            <section className="ActField Enemy">
                <div className="Bio">
                <div className="Name">Ебанутый</div>
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
                    <span className="StatName">Level</span>
                    <span className="StatValue">1</span>
                </div>
                <div className="StatRow">
                    <span className="StatName">Damage</span>
                    <span className="StatValue">3-9</span>
                </div>
                <div className="StatRow">
                    <span className="StatName">Health</span>
                    <span className="StatValue">20</span>
                </div>
            </div>
            </section>
        );
    }
}

export default Fight;
