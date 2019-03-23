import React, { Component } from 'react';
import './App.css';

const Header = (props) => {
  console.log(props);
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}

class Counter extends React.Component {
  // state = {
  //  score: 30
  // }
  constructor(props) {
    super(props);
    this.state = {
      name: "a",
      score: 30
    }
    //this.incrementScore = this.incrementScore.bind(this);
  }

  decrementScore = () => {
    this.setState(prevState => {
      return {
        score: prevState.score - 1
      }
    });
  }
  incrementScore = () => {
    // this.state.score = this.state.score + 1; 안됨
    // 변경을 하기 위해서는 setState를 호출
    this.setState(prevState => {
      return {
        score: prevState.score + 1
      }
    });
    //this.setState({score:this.state.score + 1});
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> -</button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> +</button>
      </div>
    );
    /*<button className="counter-action increment" onClick={this.incrementScore()}> +</button> // 잘못된예 */
  }
}

const Player = (props) => (
  <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={()=>props.handleRemovePlayer(props.id)}>X</button>
      </span>
    <span className="player-name">{props.name}</span>
    <Counter/>
  </div>
);

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
