import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import {Player} from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
import {playerReducer} from "./redux/reducers/player";
import {connect} from "react-redux";
import {ScoreBoard} from "./pages/ScoreBoard";

class ScoreBoard extends Component {
  max_player_id = 4;

  handleRemovePlayer = (id) => {
    // 해당 id를 삭제
    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
    }))
  }

  handleChangeScore = (id, delta) => {
    console.log(id, delta);
    this.setState(prevState => {
      prevState.players.forEach(item => {
        if (item.id === id) {
          item.score += delta;
        }
      })
      return {players: [...prevState.players]}
    })
  }
  /*
  handleAddPlayer = (name) => {
    this.setState(prevState => ({
      players: [...prevState.players, {name, score: 0, id: ++this.max_player_id}]
    }))
  }
  */

  render() {
    return (
      <div className="scoreboard">
        <Header totalPlayers={10 + 1} players={this.props.players}/>
        {
          this.props.players.map(player => (
            <Player name={player.name} key={player.id.toString()}
                    id={player.id}
                    score={player.score}
                    handleRemovePlayer={this.handleRemovePlayer}
                    handleChangeScore={this.handleChangeScore}/>
          ))
        }
        <AddPlayerForm handleAddPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  players : state.playerReducer.players
});

// 1. Header() 펑션 컴포넌트를 호출
// 2. 속성을 json으로 전달한다. {title: "My Scoreboard", totalPlayers: 11}
export default connect(mapStateToProps)(ScoreBoard);
