import React, { useState, Component } from 'react';

/** Using Hooks - useState */

export function HookCounter() {
  const [hookCounter, setCounter] = useState(0);

  const handleClick = () => setCounter(hookCounter + 1);

  return (
    <div>
      <p>hookCounter: {hookCounter}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

/** ... instead Class ... */

export class ClassCounter extends Component {
  state = {
    classCounter: 0,
  };

  constructor(props) {
    super(props);
    this.classHandleClick = this.classHandleClick.bind(this);
  }

  classHandleClick() {
    this.setState({ classCounter: this.state.classCounter + 1 });
  }

  render() {
    return (
      <div>
        <p>classCounter: {this.state.classCounter}</p>
        <button onClick={this.classHandleClick}>Increment</button>
      </div>
    );
  }
}
