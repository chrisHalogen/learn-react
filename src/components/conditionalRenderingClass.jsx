import React, { Component } from "react";

class ConditionalRenderingClass extends Component {
  render() {
    const { isloggedin } = this.props;
    return isloggedin ? <p>Welcome User</p> : <p>Please Log in</p>;
  }
}

export default ConditionalRenderingClass;
