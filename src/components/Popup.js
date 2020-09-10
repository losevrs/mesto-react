import React from 'react';

export default (props) => {

  const popupOverlay = React.useRef(null);

  const closeOnOverlayClick = (event) => {
    if (event.target === popupOverlay.current) {
      props.onClose();
    }
  }

  return (
    <section className={`popup popup_${props.name} ${props.isOpened && 'popup_opened'}`}
      onClick={closeOnOverlayClick}
      ref={popupOverlay}>
      {props.children}
    </section>
  );
}