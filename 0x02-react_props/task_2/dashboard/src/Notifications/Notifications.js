import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

export default function Notifications() {
  const handleButtonClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div className="Notifications">
      <button
        style={{ float: "right" }}
        aria-label="Close"
        onClick={handleButtonClick}
      >
        <img src="close-icon.png" alt="Close" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem html={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}