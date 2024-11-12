import React from "react";
import { StyleSheet, css } from "aphrodite";

const Login = () => {
  return (
    <>
      <div className={css(styles["App-body"])}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" />
        <label htmlFor="pass">Password: </label>
        <input type="password" id="pass" />
        <button>OK</button>
      </div>
    </>
  );
};
const styles = StyleSheet.create({
  "App-body": {
    paddingLeft: "3rem",
    paddingTop: "3rem",
  },
})

export default Login;
