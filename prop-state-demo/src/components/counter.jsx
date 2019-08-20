import React, { Component } from "react";

class Counter extends Component {
  //   state = {
  //     count: this.props.counter.value
  //   };

  //   handleIncrement = () => {
  //     this.setState({ count: this.state.count + 1 });
  //   };

  render() {
    console.log(this.props);
    return (
      <div>
        <span className="badge badge-primary m-2">
          {this.props.counter.value}{" "}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
