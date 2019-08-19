import React, { Component } from "react";
import Counter from "./counter";

//1.Create list of counter
class Counters1 extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter key={Counter.id} />
        ))}
      </div>
    );
  }
}

export default Counters1;
