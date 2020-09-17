import React, { useState } from 'react'
import PopupWithForm from './PopupWithForm';

export default props => {

  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const handleChangeName = (event) => {
    setName(event.target.value);
  }

  const handleChangeLink = (event) => {
    setLink(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onCreateCard({
      name,
      link
    });
  }

  return (
    <PopupWithForm name='newplace'
      title='Новое место'
      buttonTitle={props.buttonTitle}
      isOpened={props.isOpened}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >

      <input className='popup__input popup__input_photoname popup__input_top'
        type='text'
        name='photoName'
        placeholder='Название'
        value={name}
        onChange={handleChangeName}
        required minLength='1'
        maxLength='30'
      />
      <span id='popup__input_photoName_error'
        className='popup__input_type_error' />

      <input className='popup__input popup__input_photourl'
        type='url'
        name='photoUrl'
        placeholder='Ссылка на картинку'
        value={link}
        onChange={handleChangeLink}
        required
      />
      <span id='popup__input_photoUrl_error'
        className='popup__input_type_error' />

    </PopupWithForm>
  );
}