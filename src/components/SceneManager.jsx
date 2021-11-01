import { Component } from 'react';
import Fight from './Scenes/Fight';
import Cross from './Scenes/Cross';
import Chest from './Scenes/Chest';

var Scenes = [<Fight/>, <Cross/>, <Chest/>];

class Scenemanager extends Component {
    ChooseNextScene(){
        let chance = Math.floor(Math.random() * 10);
        if (chance > 5) {
            return Scenes[1];
        } else if (chance > 2) {
            return Scenes[0];
        } else {
            return Scenes[2];
        }
    }
    render() {
        return (
            this.ChooseNextScene()
        );
    }
}

export default Scenemanager;
