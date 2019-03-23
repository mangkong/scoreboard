import React from 'react';

export class Counter
  extends React.Component {
  constructor(props) {
    super(props);
  }
  /*
  decrementScore = () => {
    this.setState(prevState => {
      return {
        score: prevState.score - 1
      }
    });
  }
  incrementScore = () => {
    // this.state.score = this.state.score + 1; 안됨
    // 변경을 하기 위해서는 setState를 호출
    this.setState(prevState => {
      return {
        score: prevState.score + 1
      }
    });
    //this.setState({score:this.state.score + 1});
  }
  */
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={()=>this.props.handleChangeScore(this.props.id,-1)}> -</button>
        <span className="counter-score">{this.props.score}</span>
        <button className="counter-action increment" onClick={()=>this.props.handleChangeScore(this.props.id,+1)}> +</button>
      </div>
    );
  }
}