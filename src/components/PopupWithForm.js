import React from 'react';
import Popup from './Popup';

export default (props) => {
  return (
    <Popup
      name={props.name}
      isOpened={props.isOpened}
      onClose={props.onClose}>
      <form className='popup__container'
        action='#'
        method='POST'
        name={`${props.name}`}
        noValidate 
        onSubmit={props.onSubmit}>
        <h2 className='popup__title'>{`${props.title}`}</h2>

        {props.children}

        <button className='popup__submit'
          type='submit'>{props.buttonTitle}</button>
        <button className='popup__reset'
          type='button'
          onClick={props.onClose} />
      </form>
    </Popup>
  );
}