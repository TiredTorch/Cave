import React, { Component } from 'react';

class Transitionscene extends Component {
    static SwitchLoat(){
        window.onload = () => {
            document.getElementById('trans').classList.toggle("Active");
        }
    }

    render() {
        return (
            <div className="ActField Transition" id="trans">
                
            </div>
        );
    }
}

export default Transitionscene;
