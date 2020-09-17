import React from 'react'
import PopupWithForm from './PopupWithForm';

import { useCurrentUserContext } from '../contexts/CurrentUserContext';

export default props => {

  const currentUser = useCurrentUserContext();

  const [userName, setUserName] = React.useState(currentUser.name);
  const [description, setDescription] = React.useState(currentUser.about);

  React.useEffect(() => {
    setUserName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const handleChangeName = (event) => {
    setUserName(event.target.value);
  }

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onUpdateUser({
      name: userName,
      about: description,
    });
  }

  return (
    <PopupWithForm name='profileedit'
      title='Редактировать профиль'
      buttonTitle={props.buttonTitle}
      isOpened={props.isOpened}
      onClose={props.onClose}
      onSubmit={handleSubmit}>

      <input className='popup__input popup__input_name popup__input_top'
        type='text'
        name='name'
        placeholder='Имя'
        value={userName}
        onChange={handleChangeName}
        required
        minLength='2'
        maxLength='40'
      />
      <span id='popup__input_name_error'
        className='popup__input_type_error' />

      <input className='popup__input popup__input_about'
        type='text'
        name='about'
        onChange={handleChangeDescription}
        placeholder='Описание'
        value={description}
        required
        minLength='2'
        maxLength='200'
      />
      <span id='popup__input_about_error'
        className='popup__input_type_error' />

    </PopupWithForm>
  );
}