import React from 'react';
import ExpandableImage from './ExpandableImg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';


const PostFeed = ({ userName, userRole, title, description, imageSrc, status, tags }) => {
  return (
    <div className="post">

      <div className="user-info">

        <aside className="user-icon">
          <FontAwesomeIcon
            icon={faCircleUser}
            style={{cursor: "pointer"}}
          />
        </aside>

        <aside className='user-description'>

          <aside className='username'>
            <strong>{userName}</strong> 
          </aside>
          <aside className='user-role'>
            {userRole}
          </aside>
        </aside>

        <button className="connect">
          Conectar
        </button>

        <h4 className='post-status'>
          {status}
        </h4>

      </div>

      <div className="post-content">

        <aside className='post-title'>
          <h4>{title}</h4>
        </aside>

        <aside className='post-description'>
          <p>{description}</p>
        </aside>
        {imageSrc && (
          <ExpandableImage src={imageSrc} alt={title}/>
        )}

        <aside className='post-tags'>
          <h5 className='ptag'>#{tags}</h5>
        </aside>
      </div>
      <hr />
      <div className='post-interactions'>
         <FontAwesomeIcon
            icon={faHeart}
            style={{cursor: "pointer"}}
            className='like'
          />
           <FontAwesomeIcon
            icon={faComment}
            style={{cursor: "pointer"}}
            className='comment'
          />
           <FontAwesomeIcon
            icon={faHandshake}
            style={{cursor: "pointer"}}
            className='colab'
          />
           <FontAwesomeIcon
            icon={faBookmark}
            style={{cursor: "pointer"}}
            className='bookmark'
          />
      </div>
    </div>
  );
};

export default PostFeed;
