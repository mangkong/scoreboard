import React, { Component } from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";
import {AddPlayerForm} from "./components/AddPlayerForm";

class App extends Component {
  max_player_id = 4;
  state = {
    players: [
      {name: 'LDK', score: 0, id: 1},
      {name: 'HONG', score: 0, id: 2},
      {name: 'KIM', score: 0, id: 3},
      {name: 'PARK', score: 0, id: 4},
    ]
  }

  handleRemovePlayer = (id) => {
    // 해당 id를 삭제
    this.setState(prevState => ({
        players: prevState.players.filter(item => item.id !== id)
      })
    )
  }

  handleChangeScore = (id, delta) => {
    this.setState(prevState=> {
      prevState.players.forEach(item=>{
        if(item.id === id){
          item.score += delta;
        }
      })
      return {players:[...prevState.players]}
    })
  }

  handleAddPlayer = (name) =>{
    this.setState(prevState=>({
      players : [...prevState.players,{name:name,score:0,id:++this.max_player_id}]
    }))
  }
  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={1 + 10} players={this.state.players}/>
        {
          this.state.players.map(player => (
            // score={player.score}
            <Player name={player.name} key={player.id.toString()}
                    score={player.score}
                    id={player.id}
                    handleRemovePlayer={this.handleRemovePlayer}
                    handleChangeScore={this.handleChangeScore}
            />
          ))
        }
        <AddPlayerForm handleAddPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}


export default App;
