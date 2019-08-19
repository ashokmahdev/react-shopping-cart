import React, { Component } from "react";

// Create a click button with counter and show access to state when it is possible and when not
class Counter extends Component {
  state = {
    count: 0
  };

  // constructor() {
  //   super(); // Using super means construct parent object before constructing the child class
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  //we do not have access to state
  // handleIncrement() {
  //   console.log("Increment Clicked", this.state.count);
  // }

  // the above problem can be solved in 2 ways
  // 1. Adding constructor
  // 2. By converting event handler into an arrow function

  handleIncrement = () => {
    console.log("Increment Clicked", this.state.count);
    //NEXT STEP increment the counter - BUT IT IS NOT REFLECTING on The UI WHY ?
    //this.state.count++;

    // WE have to explicitly tell react about what part of the state is changed
    this.setState({ count: this.state.count + 1 });

    // OBSERVR IN DOM ONLY THE SPAN CHANGING
  };

  render() {
    return (
      <div>
        <span className="badge badge-primary m-2">{this.state.count} </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
