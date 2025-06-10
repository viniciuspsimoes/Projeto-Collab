import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';

export default function SidebarLeft() {

  return (
    <aside className="sidebar-left-preview">
      <div className='banner'></div>
      <div className="profile-preview">
        <FontAwesomeIcon
          icon={faCircleUser}
          className='profile-picture'
        />
        <h3>Usuário</h3>
        <p className="role">
          <FontAwesomeIcon
            icon={faGraduationCap}
            className='mini-icons'
          />
            Estudante de Engenharia Elétrica
        </p>
        <p className="location">
          <FontAwesomeIcon
            icon={faLocationDot}
            className='mini-icons'
          />
            Recife, Pernambuco
        </p>
        <p className="institution">
            <FontAwesomeIcon
              icon={faBuildingColumns}
              className='mini-icons'
            />
            Universidade de Pernambuco
        </p>
      </div>

      <div className="nav-buttons">
        <a href="/" className="nav-item">
          <FontAwesomeIcon icon={faBoxArchive} 
          className='item-icons'/>
          Meus projetos
         </a>
        <a href="/" className="nav-item">
         <FontAwesomeIcon icon={faHandshake} 
         className='item-icons'/>
          Colaborações
         </a>
      </div>
    </aside>
  );
}