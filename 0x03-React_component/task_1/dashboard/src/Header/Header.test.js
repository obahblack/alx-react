import React from "react";
import { shallow, render } from "enzyme";
import Header from "./Header.js";

describe("testing the header", () => {
  test("should verify it renders without crashing", () => {
    const wrapper = shallow(<Header />);
  });

  test("should verify that component render img and h1 tags", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("img").exists()).toBe(true);
    expect(wrapper.find("h1").exists()).toBe(true);
  });
});
