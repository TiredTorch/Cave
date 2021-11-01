import React from "react";
import SceneManager from "./components/SceneManager.jsx";
import HeroScene from "./components/HeroScene.jsx";
import Transitionscene from "./components/TransitionScene.jsx";
import './style.css';

function App() {
  return (
    <div className="App">
      <Transitionscene/>
      <SceneManager/>
      <HeroScene/>
    </div>
  );
}

export default App;
