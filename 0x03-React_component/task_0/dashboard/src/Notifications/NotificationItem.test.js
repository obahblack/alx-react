import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("Testing Notification Component", () => {
  test("should verify the component renders without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
  });
  test("should verify correct html by passing dummy type and value props", () => {
    const wrapper = shallow(
      <NotificationItem type="urgent" value="New resume available" />
    );
    expect(wrapper.html()).toBe(
      '<li data-notification-type="urgent">New resume available<li/>'
    );
  });
  test("should verify the correct html is rendered", () => {
    const wrapper = shallow(
      <NotificationItem type="urgent" html={{ __html: "<u>test</u>" }} />
    );
    expect(wrapper.html()).toBe(
      '<li data-notification-type="urgent"><u>test</u></li>'
    );
  });
});
