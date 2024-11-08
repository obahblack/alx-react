// CourseList/CourseList.test.js

import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe("CourseList Component", () => {
  it("renders CourseList component without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the 5 different rows", () => {
    const wrapper = shallow(<CourseList />);
    const rows = wrapper.find(CourseListRow);
    expect(rows).toHaveLength(5);

    // Check each row for correct props
    expect(rows.at(0).props()).toEqual({
      textFirstCell: "Available courses",
      isHeader: true,
    });
    expect(rows.at(1).props()).toEqual({
      textFirstCell: "Course name",
      textSecondCell: "Credit",
      isHeader: true,
    });
    expect(rows.at(2).props()).toEqual({
      textFirstCell: "ES6",
      textSecondCell: "60",
      isHeader: false,
    });
    expect(rows.at(3).props()).toEqual({
      textFirstCell: "Webpack",
      textSecondCell: "20",
      isHeader: false,
    });
    expect(rows.at(4).props()).toEqual({
      textFirstCell: "React",
      textSecondCell: "40",
      isHeader: false,
    });
  });
});
