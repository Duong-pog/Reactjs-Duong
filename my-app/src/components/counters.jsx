import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor(props){
    super(props)
  }
  state = {
    counters: [
      { id: 1, count: 4 },
      { id: 2, count: 3 },
      { id: 3, count: 2 },
      { id: 4, count: 1 }
    ],
    default: [
      { id: 1, count: 4 },
      { id: 2, count: 3 },
      { id: 3, count: 2 },
      { id: 4, count: 1 }
    ]
      
    
  };
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c =>  c.id !== counterId);
    this.setState({
      counters: counters
    });
  };

  handleReset = () => {
    const counters = this.state.default.map((counter) => (
      <Counter
      key={counter.id}
      value={counter.count}
      selected={true}
      id={counter.id}
      onDelete={(id) => this.handleDelete(id)}
      >
      </Counter>
    ))

    this.setState({
      counters: counters
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleReset}>Reset all</button>
        {this.state.counters.map((counter) => (
          <Counter
            
            key={counter.id}
            value={counter.count}
            selected={true}
            id={counter.id}
            onDelete={(id) => this.handleDelete(id)}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}


export default Counters;
