import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

export default function PostCreator() {
  return (
    <div className="post-creator">
      <h2>Faça uma postagem</h2>
      <textarea placeholder="Descreva sua ideia..."/>
      <input type="text" placeholder="Coloque suas #tags aqui, separadas por vírgula..." />
      <div className="buttons">
        
        {/*Botão para interação com IA*/}
        <button title='Usar IA'><FontAwesomeIcon icon={faRobot} /></button>
        
        <button title='Anexar imagem'><FontAwesomeIcon icon={faPaperclip} /></button>
        <button title='Postar'><FontAwesomeIcon icon={faArrowRightToBracket}/></button>
      
      </div>
    </div>
  );
}
