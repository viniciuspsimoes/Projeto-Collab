import React from 'react'
import logoAba from "../assets/logo/logoaba.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import faCircleUser from "@fortawesome/react-fontawesome"

const Header = () => {
  return (
    <div className="header">
        <img src={logoAba} alt="Logo Collab" />
        <FontAwesomeIcon icon={faCircleUser} />
    </div>
  )
}

export default Header
