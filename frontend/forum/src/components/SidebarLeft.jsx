import React from 'react';

export default function SidebarLeft() {
  return (
    <aside className="sidebar-left">
        <div className="trending-button">
            <a href="/">
                <h3>Em Alta</h3>
            </a>
        </div>
        <div className='new-button'>
            <a href="/">
                <h3>Novidades</h3>
            </a>
        </div>
 
      <div className="tags">
        {['Elétrica', 'Automação', 'Civil', 'Mecânica', 'Computação', 'Telecomunicação', 'Eletrônica', 'IA'].map((tag, i) => (
          <span key={i} className="tag">#{tag}</span>
        ))}
        <a href="/">Ver mais...</a>
      </div>
    </aside>
  );
}
