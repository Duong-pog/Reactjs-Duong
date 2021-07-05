import React from "react";
import  { Component } from "react"
import "./counter.css";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };
  handleIncrement = (product) => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  handleDecrease = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  reset = () => {
    this.setState({
      count: 0
    });
  }
  render() {
    return (
      <div>
        <h4>{"Counter"+ this.props.id}</h4>
        <span className="number">{this.formatCount()}</span>

        <button onClick={this.doHandleIncrement} className="btn">
          Add
        </button>

        <button onClick={this.handleDecrease} className="btn">
          Subtract
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.id)
          }
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <button onClick={this.reset}>Reset</button>
        <hr></hr>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;

    return count === 0 ? "Zero" : count;
  }
}

export default Counter;