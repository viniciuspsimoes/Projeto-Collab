import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import NotificationPopup from "./NotificationPopup";
import logoImg from "../assets/logo/logo-collab.png"

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const togglePopup = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <header className="header">
        <a href="/"><img src={logoImg} alt="Home" className="logo"/></a>

      <input type="text" placeholder="Pesquisar..." className="search" />

      <div className="icons">
        <FontAwesomeIcon
          icon={faBell}
          style={{ cursor: "pointer" }}
          title="Ver notificações"
          onClick={togglePopup}
          className="notification-icon"
        />
        <a href="/perfil.html">
          <FontAwesomeIcon 
            icon={faCircleUser} 
            style={{ cursor: "pointer" }} 
            title="Ver perfil"
          />
        </a>

        {/* Pop-up de notificações comentado - necessita de ajustes... */}
        {/*
        <NotificationPopup 
          isVisible={showNotifications} 
        />
        */}

      </div>
    </header>
  );
};

export default Header;
