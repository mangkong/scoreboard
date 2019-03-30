import React from 'react';
import {connect} from "react-redux";
import {addPlayer} from "../redux/action";

export class AddPlayerForm extends React.Component {
  textInput = React.createRef();

  constructor(props) {
    super(props);
    // this.state = {
    //   playerName: ''
    // }
  }

  // handleValueChange = (e) => {
  //   this.setState({playerName: e.target.value})
  // }

  handleSubmit = (e) => {
    // submit의 기본이벤트 막기
    e.preventDefault();
    this.props.addPlayer(this.textInput.current.value);
    e.currentTarget.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.textInput}
               placeholder="enter a player's name" required></input>
        <input type="submit" value="Add Player"></input>
      </form>
    );
  }
}

export default connect(null,{addPlayer})(AddPlayerForm);