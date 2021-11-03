import React, { Component } from 'react';

class Chest extends Component {
    constructor (props) {
        super(props);

        this.state = {
            point: Math.floor(Math.random() * 10) + 1
        }
    }

    componentDidMount(){
        this.SwitchLoat();
    }

    componentWillUnmount(){
        global.RoomRestoreHP();
    }


    SwitchLoat = () => {
        window.onload = () => {
            document.getElementById('trans').classList.toggle("Active");
        }
    }
    ShowPopUp = () => {
        document.getElementsByClassName("Pop_Up")[0]
        .classList.toggle("Active");
    }
    
    render() {
        return (
            <section className="ActField Chest">
                <div className="Request">
                    You find a chest
                </div>
                <div className="ActWindow" onClick={this.ShowPopUp}>
                    
                </div>
                <div className="Pop_Up Active">
                    <div className="Bl">
                        <span className="Text">You recive </span>
                        <span className="Value">{this.state.point}</span>
                        <span className="Text"> points</span>
                    </div>
                    <button onClick={() => {this.SwitchLoat(); this.ShowPopUp(); global.SceneHandleClick(); global.PointsUp(this.state.point);}}>Move next</button>
                </div>
            </section>
        );
    }
}

export default Chest;
