import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import NotificationPopup from "./NotificationPopup"; // certifique-se de que o caminho esteja correto

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const togglePopup = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/">COLLAB</a>
      </div>

      <input type="text" placeholder="Pesquisar..." className="search" />

      <div className="icons">
        <FontAwesomeIcon
          icon={faBell}
          style={{ color: "#ffffff", cursor: "pointer" }}
          onClick={togglePopup}
          className="notification-icon"
        />
        <FontAwesomeIcon icon={faCircleUser} style={{ cursor: "pointer" }} />

        {/* Janela flutuante */}
        <NotificationPopup isVisible={showNotifications} />
      </div>
    </header>
  );
};

export default Header;
