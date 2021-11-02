import React, { Component } from 'react';
import Fight from './Scenes/Fight';
import Cross from './Scenes/Cross';
import Chest from './Scenes/Chest';
import TransitionScene from './TransitionScene'

var Scenes = [<Fight/>, <Cross/>, <Chest/>];

class Scenemanager extends Component {
    constructor (props) {
        super(props);
        global.SceneHandleClick = this.handleClick;
        this.state = {
            index: 1,
            scene: <Cross/>
        }
    }

    handleClick = () => {
        
        TransitionScene.SwitchLoat();
        var indexTmp = this.state.index;
        while (indexTmp === this.state.index) {
            let chance = Math.floor(Math.random() * 10);
            if (chance > 5) {
                indexTmp = 1;
            } else if (chance > 2) {
                indexTmp = 2;
            } else {
                indexTmp = 0;
            }
            if (this.state.index !== indexTmp) {
                this.setState({index: indexTmp})
                this.setState({scene : Scenes[indexTmp]})
            }
        }
        
        
    }

    ChangeChance(){
        console.log(Scenemanager.state.chance);
    }
    render() {
        return this.state.scene;
    }
}

export default Scenemanager;
