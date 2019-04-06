import React from 'react';
import {Statistics} from "./Statistics";
import {Stopwatch} from "./Stopwatch";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {updateTitle} from "../redux/actions";

import styles from '../pages/scoreboard/Scoreboard.module.css';

const Header = ({title, players, updateTitle}) => {
  // const  = props; // destruct assignment
  return (
    <header className={styles.header}>
      <Statistics players={players}/>
      <h1 onClick={() => updateTitle('Store Title')}>{title}</h1>
      <Stopwatch/>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    score: PropTypes.number,
    name: PropTypes.string
  }))
}

Header.defaultProps = {
  title: 'Scoreboard'
}

// store의 title을 props로 연결
const mapStateToProps = (state) => ({
  title: state.playerReducer.title
});

export default connect(mapStateToProps, {updateTitle})(Header);