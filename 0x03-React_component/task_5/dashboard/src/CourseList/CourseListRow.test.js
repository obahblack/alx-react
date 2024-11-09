// CourseList/CourseListRow.test.js

import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("CourseListRow Component", () => {
  it("renders one cell with colspan = 2 when textSecondCell does not exist", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Test Course" />
    );
    expect(wrapper.find("th").length).toBe(1);
    expect(wrapper.find("th").prop("colSpan")).toBe(2);
    expect(wrapper.find("th").text()).toBe("Test Course");
  });

  it("renders two cells when textSecondCell is present", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="Test Course"
        textSecondCell="3 months"
      />
    );
    expect(wrapper.find("th").length).toBe(2);
    expect(wrapper.find("th").at(0).text()).toBe("Test Course");
    expect(wrapper.find("th").at(1).text()).toBe("3 months");
  });

  it("renders two td elements within a tr when isHeader is false", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="Test Course"
        textSecondCell="3 months"
      />
    );
    expect(wrapper.find("td").length).toBe(2);
    expect(wrapper.find("td").at(0).text()).toBe("Test Course");
    expect(wrapper.find("td").at(1).text()).toBe("3 months");
  });
});
