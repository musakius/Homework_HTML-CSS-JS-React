import React from "react";

class InputsFields extends React.Component {
  state = { user: { username: "", email: "", password: "" } };

  onChangeName = ({ target: { value } }) => {
    this.setState(({ user }) => {
      return {
        user: { ...user, username: value },
      };
    });
  };

  onChangeEmail = ({ target: { value } }) => {
    this.setState(({ user }) => {
      return {
        user: { ...user, email: value },
      };
    });
  };

  onChangePassword = ({ target: { value } }) => {
    this.setState(({ user }) => {
      return {
        user: { ...user, password: value },
      };
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { username, email, password } = this.state.user;
    return (
      <form className="app_inputsFields" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="user"
          placeholder="Username"
          required
          value={username}
          onChange={this.onChangeName}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={this.onChangeEmail}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={this.onChangePassword}
        />
        <button type="submit">Sign up</button>
      </form>
    );
  }
}

export default InputsFields;
