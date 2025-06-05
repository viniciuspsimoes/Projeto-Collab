import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons/faFire';

const BrowseTools = () => {
 const tags = ['Elétrica', 'Automação', 'Civil', 'Mecânica', 'Computação', 'Telecom', 'Eletrônica', 'Software'];

  return (
    <div className='tools-card'>
        <h3>
            Posts
        </h3>
        
        <aside className='nav-buttons'>
            <a href="/" className="nav-item">
                <FontAwesomeIcon icon={faArrowTrendUp} 
                className='item-icons'/>
                Em Alta
            </a>

            <a href="/" className="nav-item">
                <FontAwesomeIcon icon={faPlus} 
                className='item-icons'/>
                Novidades
            </a>
        </aside>
        <h3>
            Tags em alta
        </h3>
        <aside className='tags'>
            {tags.map((tag, i) => (
                <span key={i} className="tag">
                    #{tag}
                </span>
            ))}
        </aside>

    </div>
  )
}

export default BrowseTools