import React, { useState, useRef, useEffect } from 'react';

const MessageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="message-container-fixed" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="message-toggle-fixed">
        💬 Mensagens
      </button>

      {isOpen && (
        <div className="message-box-fixed">
          <p><strong>Maria:</strong> Olá! Tudo bem?</p>
          <p><strong>João:</strong> Podemos conversar?</p>
          <p><strong>Equipe:</strong> Atualização disponível!</p>
        </div>
      )}
    </div>
  );
};

export default MessageDropdown;
