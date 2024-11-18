import App from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import { shallow, render } from "enzyme";
import React from "react";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  test("App should not rash", () => {
    expect(wrapper.length).toBe(1);
  });

  test("App renders a div with the class: App-header", () => {
    wrapper.setProps({ isLoggedIn: true });
    // console.debug(wrapper.html())
    expect(wrapper.find("App-header").length).toBe(0);
  });

  test("App renders a div with the class: App-body", () => {
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.find(".App-body").length).toBe(1);
  });

  test("App renders a div with the class: App-footer", () => {
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.find(".App-footer").length).toBe(1);
  });

  test("should have a defualt state where displayDrawer is false", () => {
    expect(wrapper.state("displayDrawer")).toBe(false);
  });

  test('should set displayDrawer to true after calling handleDisplayDrawer', () => {
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  })

  test('should set displayDrawer to false after calling handleHideDrawer', () => {
    wrapper.instance().handleDisplayDrawer(); // Fisrt set it to be true
    expect(wrapper.state("displayDrawer")).toBe(true);

    wrapper.instance().handleHideDrawer(); // Then set it to false
    expect(wrapper.state("displayDrawer")).toBe(false);
   })

  // test("check if App component contain the Notifications component", () => {
  //     wrapper.setProps({isLoggedIn: true})
  //     expect(wrapper.find(<Notifications />)).toBe(1)
  // })
  test("check if App component contain the Header component", () => {
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.contains(<Header />)).toBeTruthy();
  });
  test("check if App component contain the Login component", () => {
    wrapper.setProps({ isLoggedIn: false });
    expect(wrapper.contains(<Login />)).toBeTruthy();
  });
  test("check if App component contain the Footer component", () => {
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.contains(<Footer />)).toBeTruthy();
  });
  test("check that CourseList is not displayed ", () => {
    wrapper.setProps({ isLoggedIn: false });
    expect(wrapper.contains(<CourseList />)).toBeFalsy();
  });

  describe("when isLoggedIn prop is true", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<App isLoggedIn={true} />);
    });
    test("verify that the Login component is not included", () => {
      expect(wrapper.contains(<Login />)).toBeFalsy();
    });
    test("verify that the CourseList component is included", () => {
      expect(wrapper.find("CourseList").length).toBe(1);
    });
  });
});
