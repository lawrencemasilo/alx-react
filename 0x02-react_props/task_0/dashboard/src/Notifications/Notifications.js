import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";

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
        <img src={closeIcon} alt="Close" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}