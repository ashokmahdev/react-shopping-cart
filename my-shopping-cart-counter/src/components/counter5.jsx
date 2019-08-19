import React, { Component } from "react";

// Receive PROPS and display or assign to child state
class Counter extends Component {
  state = {
    // show it can be assigned to state
    count: this.props.value
  };

  handleIncrement = () => {
    //Show the cosole value
    console.log(this.props);

    // Show it is readonly
    //this.props.value = 0;

    this.setState({ count: this.state.count + 1 });
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
