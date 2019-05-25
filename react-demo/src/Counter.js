import React, { Component } from 'react';

class Counter extends Component {
    state = { count:0}
    handleAddClick = () =>  {
        const currentCount = this.state.count
        this.setState({count:currentCount+1})
    }
  render() {
    return (
      <div>
        <p>{this.props.tatile}</p>
        <p>{this.props.count}</p>
        <button onClick = {this.handleAddClick}>
          Add
        </button>
      </div>
    );
  }
}

export default Counter;
