import React from 'react'

function NotificationPopup({isVisible}) {
    if(!isVisible) return null;
    
    return (
        <div className='notification-popup'>
            <h4>Notificações</h4>
            <ul>
                <li>André Marinho pediu para colaborar com você</li>
                <li>Um investidor quer colaborar com sua ideia</li>
            </ul>
        </div>
    );
}

export default NotificationPopup;
