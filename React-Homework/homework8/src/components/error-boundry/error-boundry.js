import React, { Component } from "react";
import ErrorItem from "../error-item";

class ErrorBoundry extends Component {
  state = {
    error: false,
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }
  render() {
    if (this.state.error) {
      return <ErrorItem />;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
