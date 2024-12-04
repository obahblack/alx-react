import React from "react";
import { shallow } from "enzyme";
import Login from "./Login.js";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

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

describe("verify Login functionality", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  test("should verify  that the submit button is diabled by default", () => {
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop("disabled")).toBe(true);
  });

  test("should verify that after changing the value of the two inputs, the button is enabled", () => {
    const emailInput = wrapper.find('input[type="email"]');
    const passwordInput = wrapper.find('input[type="password"]');
    const submitButton = wrapper.find('input[type="submit"]');

    // Simulate entering email
    emailInput.simulate("change", { target: { value: "email@emaple.com" } });
    wrapper.update();

    // Simulate entering password
    passwordInput.simulate("change", { target: { value: "password123" } });
    wrapper.update();

    // Verify the submit button is enabled
    expect(wrapper.find('input[type="submit"]').prop("disabled")).toBe(false);
  });
});
