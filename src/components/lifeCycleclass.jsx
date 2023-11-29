import React, { Component } from "react";

class LifecycleClass extends Component {
  componentDidMount() {
    console.log("Class Component have been mounted");
  }

  componentWillUnmount() {
    console.log("Class Component have been unmounted");
  }

  render() {
    return <h1>Class Components with lifecycle methods</h1>;
  }
}

export default LifecycleClass;
