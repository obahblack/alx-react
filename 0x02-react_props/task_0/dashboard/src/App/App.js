import React from "react";
import "./App.css";
import Header from "../Header/Header.js";
import Notifications from "../Notifications/Notifications.js";
import Login from "../Login/Login.js";
import Footer from "../Footer/Footer.js";

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </>
  );
}

export default App;
