import React, { Component } from 'react';

class Cross extends Component {
    SwitchLoat = () => {
        window.onload = () => {
            document.getElementById('trans').classList.toggle("Active");
        }
    }
    
    
    componentWillUnmount(){
        global.RoomRestoreHP();
    }

    render() {
        this.SwitchLoat();
        return (
            <section className="ActField Crossroad">
                <div className="Request">
                Crossroads
                </div>
                <div className="Way" onClick={() => {global.SceneHandleClick()}}></div>
                <div className="Way" onClick={global.SceneHandleClick}></div>
            </section>
        );
    }
}

export default Cross;
