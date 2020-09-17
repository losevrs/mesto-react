import React, { useRef } from 'react'
import PopupWithForm from './PopupWithForm';

export default props => {

  const urlInput = useRef(null);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    props.onUpdateAvatar({
      avatar: urlInput.current.value
    });
  }

  return (
    <PopupWithForm name='newavatar'
      title='Обновить аватар'
      buttonTitle={props.buttonTitle}
      isOpened={props.isOpened}
      onClose={props.onClose}
      onSubmit={handleSubmit}>

      <input className='popup__input popup__input_avatar  popup__input_top'
        type='url'
        name='avatar'
        placeholder='Ссылка на картинку'
        ref={urlInput}
        required />
      <span id='popup__input_avatar_error'
        className='popup__input_type_error' />

    </PopupWithForm>
  );
}