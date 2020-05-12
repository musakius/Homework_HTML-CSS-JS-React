import React from "react";
import { Redirect, Link } from "react-router-dom";

class IncognitoPage extends React.Component {
  state = {
    isLoggedIn: false,
  };
  render() {
    if (!this.state.isLoggedIn) {
      return <Redirect to="/" />;
    }

    return <h1>Incognito Page</h1>;
  }
}

export default IncognitoPage;
