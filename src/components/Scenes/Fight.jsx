import React, { Component } from 'react';

var Enemies = [];
    Enemies[0] = {
        Name: "Spider",
        Lvl: 1,
        minDmgHero: 1,
        maxDmgHero: 3,
        MaxHP: 10,
        CurrentHp: 10,
        Portret: "http://pm1.narvii.com/6759/1d1de67151d4abbf85b9ea41f0e697fd89579b36v2_00.jpg"
    }
    Enemies[1] = {
        Name: "Snake",
        Lvl: 2,
        minDmgHero: 2,
        maxDmgHero: 6,
        MaxHP: 15,
        CurrentHp: 15,
        Portret: "https://listverse.com/wp-content/uploads/2017/02/00895-1200x720.jpg"
    }
    Enemies[2] = {
        Name: "Skeleton",
        Lvl: 3,
        minDmgHero: 3,
        maxDmgHero: 9,
        MaxHP: 20,
        CurrentHp: 20,
        Portret: "https://i.pinimg.com/736x/51/67/f0/5167f01b215b715074252c62c5129e4c.jpg"
    }


class Fight extends Component {
    constructor (props) {
        super(props);
        this.state = {
            enemy : Enemies[Math.floor(Math.random() * Enemies.length)],
            AllHeroDmg : 0,
            curHp : 0
        }
        this.getAllDmg = this.getAllDmg.bind(this);
        this.Kick = this.Kick.bind(this);
        this.Hurt = this.Hurt.bind(this);
        this.CheckDeath = this.CheckDeath.bind(this)

        global.enemyKick = this.Kick;
        global.enemyDmg = this.getAllDmg;
        global.enemyHurt = this.Hurt;
        global.CheckDeath = this.CheckDeath;
    }


    componentDidMount(){
        this.setState({curHp : this.state.enemy.CurrentHp})
        document.getElementsByClassName('AttackButton')[0].removeAttribute('disabled');
        this.ExitFight();
        global.Fight();
    }
    componentWillUnmount(){
        document.getElementsByClassName('AttackButton')[0].setAttribute('disabled', true);
        document.getElementsByClassName('AttackButton')[0].innerHTML = "Searching...";
        global.RoomRestoreHP();
    }
    Kick = () => {
        document.getElementById("mgmg").style.webkitFilter = "invert(0%)";
        var DMGarr = document.getElementsByClassName("Power");

        var EnemyAttacks = new Array(3);
        for (let i = 0; i < 3; i++) {
            EnemyAttacks[i] = Math.floor(
                this.state.enemy.minDmgHero + Math.random() * 
                (this.state.enemy.maxDmgHero - this.state.enemy.minDmgHero + 1)
            );
            setTimeout(() => {
                DMGarr[i].innerHTML = EnemyAttacks[i]
            }, (i - 2) * 1000);
        }
        this.setState({AllHeroDmg : EnemyAttacks.reduce((sum, elem) => {return sum + elem})})
    }
    Hurt = dmg => {
        
        document.getElementById("mgmg").style.transition = "all .3s";
        document.getElementById("mgmg").style.webkitFilter = "invert(100%)";
        this.setState({curHp : this.state.curHp - dmg});
        if (this.state.curHp <= 0) {
            //this.Death()
        }
    }
    getAllDmg = () => {return this.state.AllHeroDmg};

    ExitFight = () => {
        document.getElementsByClassName('AttackButton')[0].innerHTML = "Move next";
        //document.getElementsByClassName('AttackButton')[0].onclick = () => {global.SceneHandleClick()};
    }
    SwitchLoat = () => {
        window.onload = () => {
            document.getElementById('trans').classList.toggle("Active");
        }
    }
    CheckDeath = () => {
        if(this.state.curHp <= 0) return true;
    }

    render() {
        this.SwitchLoat();

        return (
            <section className="ActField Enemy">
                <div className="Bio">
                <div className="Name">{this.state.enemy.Name}</div>
                <img id='mgmg' src={this.state.enemy.Portret} alt="avatar"/>
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
                    <span className="StatName">Level </span>
                    <span className="StatValue">{this.state.enemy.Lvl}</span>
                </div>
                <div className="StatRow">
                    <span className="StatName">Damage </span>
                    <span className="StatValue">{this.state.enemy.minDmgHero}-{this.state.enemy.maxDmgHero}</span>
                </div>
                <div className="StatRow">
                    <span className="StatName">Health </span>
                    <span className="StatValue">{this.state.curHp} out of {this.state.enemy.MaxHP}</span>
                </div>
            </div>
            </section>
        );
    }
}

export default Fight;
