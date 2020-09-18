import React, { useState } from 'react'
import PopupWithForm from './PopupWithForm';
import InputWithBrowserValidation from './InputWithBrowserValidation';

export default props => {

  const [isTouched, setIsTouched] = useState(false);
  const [input, setInput] = useState();

  const [buttonEnabled, setButtonEnabled] = useState(true);

  const setButtonStatus = (status) => {
    setButtonEnabled(status);
  }

  const handleChange = () => {
    if (!isTouched) {
      setIsTouched(true);
    }
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();

    props.onUpdateAvatar({
      avatar: input.current.value
    });
  }

  return (
    <PopupWithForm name='newavatar'
      title='Обновить аватар'
      buttonTitle={props.buttonTitle}
      buttonEnabled={buttonEnabled}
      isOpened={props.isOpened}
      onClose={props.onClose}
      onSubmit={handleSubmit}>

      <InputWithBrowserValidation
        className='popup__input popup__input_avatar  popup__input_top'
        type='url'
        name='avatar'
        placeholder='Ссылка на картинку'
        onChange={handleChange}
        required
        isTouched={isTouched}
        refInput={el => (setInput(el))}
        onButtonStatusChange={setButtonStatus}
      />

    </PopupWithForm>
  );
}