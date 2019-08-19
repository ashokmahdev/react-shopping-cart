import React, { Component } from "react";

// Sending an event back to parent using delete button

//If you observer the child component ( counter component) has only value,
//if we need to delete the entire counter which is owned by parent conuters component ,
//we need to inform parent component which owns the state of entire list of counters (from which the selected counter needs to be deleted)

class Counter extends Component {
  state = {
    count: this.props.value
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Delete event sent to parent
  // render() {
  //   return (
  //     <div>
  //       <span className="badge badge-primary m-2">{this.state.count} </span>
  //       <button
  //         onClick={this.handleIncrement}
  //         className="btn btn-secondary btn-sm"
  //       >
  //         Increment
  //       </button>
  //       <button
  //         className="btn btn-danger btn-sm m-2"
  //         onClick={this.props.onDelete}
  //       >
  //         Delete
  //       </button>
  //     </div>
  //   );
  // }

  //As we need say exactly which child is raising the delete event we need add below arrow function with the id
  // delete event with id of the child
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
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
