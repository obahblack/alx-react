import React from "react";
import { shallow, render, configure } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("App", () => {
  test("Notifications renders without crashing", () => {
    shallow(<Notifications />);
  });

  test("Notifications find ul", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("ul").length).toBe(1);
  });

  test("Notifications renders three list items", () => {
    const wrapper = shallow(<Notifications />);
    const unList = wrapper.find("ul");
    expect(unList.find("li")).toHaveLength(3);
  });

  test("Notifications renders text", () => {
    const wrapper = shallow(<Notifications />);
    const notificationText = wrapper.find("p");
    expect(notificationText.text()).toBe("Here is the list of notifications");
  });

  test("should check that the component renders NotificationItem elements", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).exists()).toBe(true);
    expect(wrapper.find(NotificationItem).toHaveLength(3));
  });

  test("should verify that the first NotificationItem element renders the right html", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).at(0).html()).toBe(
      <li data-notification-type="default">New course available</li>
    );
  });
});
