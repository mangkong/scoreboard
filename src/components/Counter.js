import React from 'react';
import PropTypes from 'prop-types';

export class Counter extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    score: PropTypes.number,
    handleChangeScore: PropTypes.func
  }

  render() {
    // desctuct assignment
    const {handleChangeScore, id, score} = this.props;

    return (
      <div className="counter">
        <button className="counter-action decrement"
                onClick={() => handleChangeScore(id, -1)}> - </button>
        <span className="counter-score">{score}</span>
        <button className="counter-action increment"
                onClick={() => handleChangeScore(id, 1)}> + </button>
      </div>
    );
  }
}