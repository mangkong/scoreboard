import React from 'react';

export class AddPlayerForm
  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName : ''
    }
  }

  handleValueChange = (e) => {
    this.setState({playerName: e.target.value})
  }

  handleSubmit = (e) => {
    // submit 기본이벤트 막기
    e.preventDefault(); // 기본이벤트
    this.props.handleAddPlayer(this.state.playerName);
    this.setState({playerName:''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.playerName}
               onChange={this.handleValueChange}
               placeholder="enter a player's name" required
        />
        <input type="submit" value="Add Player"/>
      </form>
    );
  }
}