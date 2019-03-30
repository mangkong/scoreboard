import React from 'react';
import {Counter} from "./Counter";

export class Player extends React.Component {
  render() {
    console.log(this.props.name, ' rendered');
    // destruct assignment
    const {handleRemovePlayer, handleChangeScore, id, name, score} = this.props;

    return (
      <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={() => handleRemovePlayer(id)}>x</button>
    </span>
        <span className="player-name">
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