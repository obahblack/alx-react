import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer.js";

describe("Verify Footer renders without crashing", () => {
  test("should verify it renders", () => {
    const wrapper = shallow(<Footer />);
  });

  test('should verify it renders the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text().includes("Copyright")).toBe(true);
  });
});
