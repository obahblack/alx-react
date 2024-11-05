// App.test.js

import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";

describe("App Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it("always renders Header, Footer, and Notifications components", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).exists()).toBe(true);
    expect(wrapper.find(Footer).exists()).toBe(true);
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it("does not display CourseList when isLoggedIn is false", () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(CourseList).exists()).toBe(false);
  });

  describe("when isLoggedIn is true", () => {
    it("does not render the Login component", () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(Login).exists()).toBe(false);
    });

    it("renders the CourseList component", () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(CourseList).exists()).toBe(true);
    });
  });

  it("renders Login component when isLoggedIn is false", () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(Login).exists()).toBe(true);
  });

  it("matches snapshot when isLoggedIn is false", () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("matches snapshot when isLoggedIn is true", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper).toMatchSnapshot();
  });
});
