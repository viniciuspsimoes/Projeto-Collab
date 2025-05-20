import React from 'react';

export default function SidebarRight() {
  return (
    <aside className="sidebar-right">
      <div className="online">
        <h4>Membros on-line</h4>
        <ul>
          <li>Severino</li>
          <li>Sebastião</li>
          <li>Alan Brasil</li>
          <li>...</li>
        </ul>
      </div>
      <div className='more-members'>
        <a href="/">Ver mais...</a>
      </div>
      <div className="online investors">
        <h4>Investidores on-line</h4>
        <ul>
          <li>Júlio César</li>
          <li>Maquiavel</li>
          <li>Sartre</li>
          <li>...</li>
        </ul>
      </div>
      <div className='more-investors'>
        <a href="/">Ver mais...</a>
      </div>
    </aside>
  );
}
