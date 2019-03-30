import React from 'react';

export class Stopwatch extends React.Component {
  tickRef;

  tick = () => {
    // isRunning이 true이면 timer를 1씩 증가
    if (this.state.isRunning) {
      this.setState(prevState => ({
        timer: prevState.timer + 1
      }))
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }))
  }

  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      isRunning: false
    }
  }

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{this.state.timer}</span>
        <button onClick={this.handleClick}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
        <button>Reset</button>
      </div>
    );
  }

  // DOM이 렌더링 된 직후에 호출되는 라이프 사이클
  // 3rd 라이브러리 로딩, 네트워크 호출
  componentDidMount() {
    this.tickRef = setInterval(this.tick, 1000);
  }

  // DOM이 파괴되기 직전에 호출되는 라이프 사이클
  // 리소스 해제 등등
  omponentWillUnmount() {
    clearInterval(this.tickRef);
  }
}
