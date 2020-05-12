import React from "react";
import "./error-button.css";

class ErrorButton extends React.Component {
  state = {
    error: false,
  };

  render() {
    if (this.state.error) {
      this.foo.bar = 0;
    }
    return (
      <button
        className="error-button btn btn-danger btn-lg"
        onClick={() => this.setState({ error: true })}
      >
        Throw Error
      </button>
    );
  }
}

export default ErrorButton;
