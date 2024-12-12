import React, { useEffect, useState } from "react";
import { StyleSheet, css } from "aphrodite";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      enableSubmit: false,
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault(); // Prevent default form form submission behavior
    this.props.logIn(this.state.email, this.state.password);
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value }, this.handleEnableSubmit);
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value }, this.handleEnableSubmit);
  }

  handleEnableSubmit = () => {
    if (this.state.email !== "" && this.state.password !== "") {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <React.Fragment>
        <div className={css(loginStyles.appBody)}>
          <p>Login to access the full dashboard</p>
          <form onSubmit={this.handleLoginSubmit}>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              className={loginStyles.inputs}
              onChange={this.handleChangeEmail}
            />
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              className={loginStyles.inputs}
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
            <input type="submit" value="OK" disabled={!enableSubmit} />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

const loginStyles = StyleSheet.create({
  appBody: {
    padding: "36px 24px",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    },
  },

  inputs: {
    margin: "0 16px 0 8px",
  },
});

export default Login;
