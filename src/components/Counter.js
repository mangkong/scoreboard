import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from '../pages/scoreboard/Scoreboard.module.css';
import {changeScore} from "../redux/actions";
import {connect} from "react-redux";

class Counter extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    score: PropTypes.number,
    handleChangeScore: PropTypes.func
  }

  render() {
    // desctuct assignment
    const {changeScore, id, score} = this.props;

    return (
      <div className={styles.counter}>
        <button className={classNames(styles["counter-action"], styles.decrement)}
                onClick={() => changeScore(id, -1)}> - </button>
        <span className={styles["counter-score"]}>{score}</span>
        <button className={classNames(styles["counter-action"], styles.increment)}
                onClick={() => changeScore(id, 1)}> + </button>
      </div>
    );
  }
}

// (액션을 디스패치하는 펑션)을 (Props)로 subscribe해서 가져온다.
// let mapDispathchToProps = (dispatch) => ({
//   changeScore: (id, delta) => dispatch(changeScore(id, delta))
// })
//
// export default connect(null, mapDispathchToProps)(Counter)

export default connect(null, {changeScore})(Counter)