import React, { Component } from "react";

// Display List of of items
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>tag</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Counter;
