import React from "react";
import "./Notifications.css";
import close from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";

const /* A component that will render a list of notifications. */
  Notifications = ({ displayDrawer }) => {
    function onClick() {
      console.log("Close button has been clicked");
    }
    return (
      <>
        <div className="menuItem">Your Notification</div>
        {displayDrawer && (
          <div className="Notifications">
            <button
              aria-label="Close"
              style={{ position: "absolute", top: "1rem", right: "1rem" }}
              onClick={onClick}
            >
              <img src={close} alt="Close" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              <NotificationItem type="default" value="New course available" />
              <NotificationItem type="urgent" value="New resume available" />
              <NotificationItem
                type="urgent"
                html={{ __html: getLatestNotification }}
              />
            </ul>
          </div>
        )}
      </>
    );
  };

Notifications.defaultProps = {
  displayDrawer: false,
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

export default Notifications;
