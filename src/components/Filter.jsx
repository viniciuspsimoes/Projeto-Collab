// ainda será implementado

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter'

const Filter = () => {
  return (
    <div className='filter'>
        <h5>Filtrar
            <FontAwesomeIcon 
                icon={faFilter} 
                style={{ cursor: "pointer" }} 
                title="Filtrar posts"
                className='filter-icon'
            />
        </h5>
    </div>
  )
}

export default Filter