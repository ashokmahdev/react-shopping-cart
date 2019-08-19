import React, { Component } from "react";
import Counter from "./counter";

//Receving delete event from child component
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    //console.log("delete event called");

    console.log("delete event called for =" + counterId);

    // Lets do actual delete
    const countersModified = this.state.counters.filter(c => c.id != counterId);
    this.setState({ counters: countersModified });
  };

  // passing delete event handler without id
  //   render() {
  //     return (
  //       <div>
  //         {this.state.counters.map(counter => (
  //           <Counter
  //             key={counter.id}
  //             value={counter.value}
  //             onDelete={this.handleDelete}
  //           />
  //         ))}
  //       </div>
  //     );
  //   }

  // passing delete event handler WITH id
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            id={counter.id}
            value={counter.value}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
