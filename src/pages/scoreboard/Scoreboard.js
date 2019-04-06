import React from 'react';
import Player from "../../components/Player";
import AddPlayerForm from "../../components/AddPlayerForm";
import {connect} from "react-redux";
import Header from "../../components/Header";

import styles from './Scoreboard.module.css'

class Scoreboard extends React.Component {

  render() {
    return (
      <div className={styles.scoreboard}>
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
        <AddPlayerForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.playerReducer.players
})

export default connect(mapStateToProps)(Scoreboard);