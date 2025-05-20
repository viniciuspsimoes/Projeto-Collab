import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

export default function PostCreator() {
  return (
    <div className="post-creator">
      <h2>Faça uma postagem</h2>
      <textarea placeholder="Qual a ideia inovadora de hoje?"/>
      <input type="text" placeholder="#tags" />
      <div className="buttons">
        <button><FontAwesomeIcon icon={faPaperclip} /></button>
        <button><FontAwesomeIcon icon={faArrowRightToBracket}/></button>
      </div>
    </div>
  );
}
