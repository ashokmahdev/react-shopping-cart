import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleReset = () => {
    const countersResetState = this.state.counters.map(cts => {
      cts.value = 0;
      return cts;
    });
    this.setState({ counters: countersResetState });
  };

  handleDelete = counterId => {
    console.log("Delete event called", counterId);

    const countersNewState = this.state.counters.filter(
      cts => cts.id != counterId
    );
    this.setState({ counters: countersNewState });
  };

  handleIncrement = counter => {
    console.log(counter);
    const counterForIncrement = [...this.state.counters];
    const index = counterForIncrement.indexOf(counter);
    counterForIncrement[index] = { ...counter };
    counterForIncrement[index].value++;
    console.log(this.state.counters[index]);
    this.setState({ counters: counterForIncrement });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
        />
      </React.Fragment>
    );
  }
}

export default App;
