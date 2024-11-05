import React from "react";
import PropTypes from "prop-types";
import { html } from "cheerio";

const NotificationItem = ({ type, html, value }) => {
  return value ? (
    <li data-notification-type={type}>{value}</li>
  ) : (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
  );
};

NotificationItem.defaultProps = {
  type: "default",
};
NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
};
export default NotificationItem;
