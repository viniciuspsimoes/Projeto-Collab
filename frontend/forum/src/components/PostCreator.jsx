import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket, faPaperclip, faRobot } from '@fortawesome/free-solid-svg-icons';
import ChatBotPopUp from "./ChatBotPopUp";
export default function PostCreator() {
  const [showChatBot, setShowChatBot] = useState(false);

  return (
    <div className="post-creator">
      <h2 className='post-creator-title'>Faça uma postagem</h2>
      <textarea placeholder="Descreva sua ideia..." />
      <input type="text" placeholder="Coloque suas #tags aqui, separadas por vírgula..." />
      <div className="buttons">
        <button title='Usar IA' onClick={() => setShowChatBot(true)}>
          <FontAwesomeIcon icon={faRobot} />
        </button>
        <button title='Anexar imagem'>
          <FontAwesomeIcon icon={faPaperclip} />
        </button>
        <button title='Postar'>
          <FontAwesomeIcon icon={faArrowRightToBracket} />
        </button>
      </div>
      {showChatBot && <ChatBotPopUp onClose={() => setShowChatBot(false)} />}
    </div>
  );
}
