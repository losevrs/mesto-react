import React, { useState } from 'react';

export default (props) => {

  const popupOverlay = React.useRef(null);

  const closeOnOverlayClick = (event) => {
    if (event.target === popupOverlay.current) {
      props.onClose();
    }
  }

  const handleEscClose = (event) => {
    if (event.key === 'Escape') {
      props.onClose();
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleEscClose);
    return (() => {
      document.removeEventListener('keydown', handleEscClose);
    })
  },[]);

  return (
    <section className={`popup popup_${props.name} ${props.isOpened && 'popup_opened'}`}
      onClick={closeOnOverlayClick}
      ref={popupOverlay}>
      {props.children}
    </section>
  );
}