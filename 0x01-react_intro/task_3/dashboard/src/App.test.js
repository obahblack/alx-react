import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App test", () => {
  test("App should not crash", () => {
    shallow(<App />);
  });

  test("App should render div class App-header", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-header").exists()).toBe(true);
  });

  test("should verify App renders a div with class App-body ", () => {
    const wrapper = shallow(<App />); //render/shallow can be used
    expect(wrapper.find(".App-body").exists()).toBe(true);
  });

  test("should  verify App renders a div with class App-footer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-footer").exists()).toBe(true);
  });
});
