import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";

describe("App", () => {
  test("App should not crash", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true); // Added assertion to check if the App component renders
  });

  test("should contain the Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).exists()).toBe(true); // Use find to check for the component
  });

  test("should contain the Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).exists()).toBe(true); // Use find to check for the component
  });

  test("should contain Login component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login).exists()).toBe(true); // Use find to check for the component
  });

  test("should contain Footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).exists()).toBe(true); // Use find to check for the component
  });
});
