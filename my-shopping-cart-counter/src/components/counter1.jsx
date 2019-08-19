import React, { Component } from "react";

// STEP1
//imrc tab
//cc
class Counter1 extends Component {
  //state = {  }

  render() {
    // We know that the below expression is jsx (java script xml)
    // All jsx gets converted to a React.createElement("h1",...)
    //Babel is responsible for converting jsx to React.createElement(..)  API

    //STEP2
    // return (
    //   <div>
    //     <h1>Hello from counter component</h1>
    //     <button />
    //   </div>
    // );
    //return any jsx;

    //STEP3
    return (
      <React.Fragment>
        <h1>Hello from counter component</h1>
        <button />
      </React.Fragment>
    );
  }
}

export default Counter1;
