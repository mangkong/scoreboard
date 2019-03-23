import React, { Component } from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 30, id: 1},
      {name: 'HONG', score: 40, id: 2},
      {name: 'KIM', score: 50, id: 3},
      {name: 'PARK', score: 60, id: 4},
    ]
  }

  handleRemovePlayer = (id) => {
    console.log(id);
    // 해당 id를 삭제
    this.setState
    (
      prevState => ({
        players: prevState.players.filter(item => item.id !== id)
      })
    )
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={1 + 10}/>
        {
          this.state.players.map(player => (
            // score={player.score}
            <Player name={player.name} key={player.id.toString()}
                    id={player.id}    handleRemovePlayer={this.handleRemovePlayer}/>
          ))
        }
      </div>
    );
  }
}


export default App;
