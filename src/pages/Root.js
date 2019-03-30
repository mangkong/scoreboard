import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Home} from "./Home";
import {Heroes} from "./Heroes";
import {ScoreBoard} from "./ScoreBoard";
import {Menu} from "./Menu";

export class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <>
        <Menu/>
          <Route exact path="/" component={Home}></Route>
          <Route path="/heroes" component={Heroes}></Route>
          <Route path="/scoreboard" component={ScoreBoard}></Route>
        </>
      </BrowserRouter>
    );
  }
}