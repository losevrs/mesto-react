import React, { useState } from 'react'
import PopupWithForm from './PopupWithForm';
import InputWithBrowserValidation from './InputWithBrowserValidation';

export default props => {

  const [name, setName] = useState('');
  const [nameIsValid, setNameIsValid] = useState(true);
  const [isNameTouched, setIsNameTouched] = useState(false);

  const [link, setLink] = useState('');
  const [linkIsValid, setLinkIsValid] = useState(true);
  const [isLinkTouched, setIsLinkTouched] = useState(false);

  const buttonEnabled = nameIsValid && linkIsValid;

  const handleChangeName = (event) => {
    setIsNameTouched(true);
    setName(event.target.value);
  }

  const handleChangeLink = (event) => {
    setIsLinkTouched(true);
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
      buttonEnabled={buttonEnabled}
      isOpened={props.isOpened}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >

      <InputWithBrowserValidation
        className='popup__input popup__input_photoname popup__input_top'
        type='text'
        name='photoName'
        placeholder='Название'
        value={name}
        onChange={handleChangeName}
        required
        minLength='1'
        maxLength='30'
        isTouched={isNameTouched}
        onButtonStatusChange={setNameIsValid}
      />

      <InputWithBrowserValidation
        className='popup__input popup__input_photourl'
        type='url'
        name='photoUrl'
        placeholder='Ссылка на картинку'
        value={link}
        onChange={handleChangeLink}
        required
        isTouched={isLinkTouched}
        onButtonStatusChange={setLinkIsValid}
      />

    </PopupWithForm>
  );
}