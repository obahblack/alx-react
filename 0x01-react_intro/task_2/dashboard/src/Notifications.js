import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "./utils";

const /* A component that will render a list of notifications. */
  Notifications = () => {
    const onClick = () => {
      console.log("Close button has been clicked");
    };
    return (
      <div className="Notifications">
        <button
          aria-label="close"
          style={{ position: "fixed", top: "2rem", right: "1rem" }}
          onClick={onClick}
        >
          <img src="close-icon.png" alt="close" />
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          <li data-priority="default">New course available</li>
          <li data-priority="urgent">New resume available</li>
          <li
            data-priority="urgent"
            dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
          ></li>
        </ul>
      </div>
    );
  };

export default Notifications;
