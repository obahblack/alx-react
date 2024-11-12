import React from "react";
import logo from "../assets/Holberton Logo.jpg";
import { StyleSheet, css } from "aphrodite";

const Header = () => {
  return (
    <div className={css(styles["App-header"])}>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>School dashboard</h1>
    </div>
  );
};


const styles  = StyleSheet.create({
  "App-header": {
    display: "flex",
    alignItems: "center",
    borderBottom: "4px solid #e0354b",
    color: "#e0354b",
  }
})
export default Header;
