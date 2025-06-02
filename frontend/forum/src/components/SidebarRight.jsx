import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

export default function SidebarRight() {
  const members = ['José Augusto', 'André Marques', 'Fernanda Torres', 'Miguel Arraes', 'Juliana Ferraz', 'Sabrina Motta', 'Paulo Fernando', 'Gutto Baliotelli'];

  return (
    <aside className="sidebar-right">
      <div className="online">
        <h3>Parceiros online</h3>
          <div className="names">
            {members.map((name, i) => (
            <span key={i} className="name-items">
              <FontAwesomeIcon 
              icon={faCircle} 
              style={{color: '#00a832',}}
              className='on-indicator'
              />{name}</span>
            ))}
          </div>

      <div className='more-members'>
        <a href="/">Ver mais...</a>
      </div>
      </div>
    </aside>
  );
}
