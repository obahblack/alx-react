import React from "react";
import { shallow } from "enzyme";
import Login from "./Login.js";

describe("Verify it renders without crashing", () => {
  test("should verify is Login component renders", () => {
    const wrapper = shallow(<Login />);
  });

  test("should very 2 inputs and 2 label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input").length).toBe(2);
    expect(wrapper.find("label").length).toBe(2);
  });
});
