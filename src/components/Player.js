import React from 'react';
import Counter from "./Counter";

import styles from '../pages/scoreboard/Scoreboard.module.css';
import {connect} from "react-redux";
import {removePlayer} from "../redux/actions";

class Player extends React.Component {
  render() {
    console.log(this.props.name, ' rendered');
    // destruct assignment
    const {removePlayer, handleChangeScore, id, name, score} = this.props;

    return (
      <div className={styles.player}>
    <span className={styles["player-name"]}>
      <button className={styles["remove-player"]} onClick={() => removePlayer(id)}>x</button>
    </span>
        <span className={styles["player-name"]}>
      {name}
    </span>
        <Counter score={score}
                 id={id}
                 handleChangeScore={handleChangeScore}/>
      </div>
    );
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log('componentWillReceiveProps:', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate:', nextProps);
    // 현재 스코어와 nextProps의 score를 비교
    return this.props.score !== nextProps.score ? true : false;
  }
}

export default connect(null, {removePlayer})(Player)