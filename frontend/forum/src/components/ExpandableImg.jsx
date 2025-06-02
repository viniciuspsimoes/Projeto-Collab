import React, { useState } from 'react';

const ExpandableImage = ({ src, alt, style = {} }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const openModal = () => setIsExpanded(true);
  const closeModal = () => setIsExpanded(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={openModal}
        style={{
          width: '100%',
          maxHeight: '200px',
          objectFit: 'cover',
          cursor: 'pointer',
          borderRadius: '6px',
          ...style,
        }}
      />
      {isExpanded && (
        <div style={styles.overlay} onClick={closeModal}>
          <img src={src} alt={alt} style={styles.modalImage} />
        </div>
      )}
    </>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },
  modalImage: {
    maxWidth: '90%',
    maxHeight: '90%',
    borderRadius: '8px',
  },
};

export default ExpandableImage;
