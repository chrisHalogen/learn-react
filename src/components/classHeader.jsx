import React, { Component } from "react";

class ClassHeader extends Component {
  render() {
    const { data } = this.props;
    return <h1>Hello I am a class component - {data}</h1>;
  }
}

export default ClassHeader;
