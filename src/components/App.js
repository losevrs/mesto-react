import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

export default (props) => {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  return (
    <div className='page'>

      <Header />

      <Main onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick} />

      <Footer />

      <PopupWithForm name='profileedit'
        title='Редактировать профиль'
        buttonTitle='Сохранить'
        isOpened={isEditProfilePopupOpen}
        onClose={closeAllPopups}>

        <input className='popup__input popup__input_name popup__input_top'
          type='text'
          name='name'
          placeholder='Имя'
          required minLength='2'
          maxLength='40' />
        <span id='popup__input_name_error'
          className='popup__input_type_error' />

        <input className='popup__input popup__input_about'
          type='text'
          name='about'
          placeholder='Описание'
          required minLength='2'
          maxLength='200' />
        <span id='popup__input_about_error'
          className='popup__input_type_error' />

      </PopupWithForm>

      <PopupWithForm name='newplace'
        title='Новое место'
        buttonTitle='Сохранить'
        isOpened={isAddPlacePopupOpen}
        onClose={closeAllPopups}>

        <input className='popup__input popup__input_photoname popup__input_top'
          type='text'
          name='photoName'
          placeholder='Название'
          required minLength='1'
          maxLength='30' />
        <span id='popup__input_photoName_error'
          className='popup__input_type_error' />

        <input className='popup__input popup__input_photourl'
          type='url'
          name='photoUrl'
          placeholder='Ссылка на картинку'
          required />
        <span id='popup__input_photoUrl_error'
          className='popup__input_type_error' />

      </PopupWithForm>

      <PopupWithForm name='confirm'
        title='Вы уверены?'
        buttonTitle='Да'
        onClose={closeAllPopups}/>

      <PopupWithForm name='newavatar'
        title='Обновить аватар'
        buttonTitle='Сохранить'
        isOpened={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>

        <input className='popup__input popup__input_avatar  popup__input_top'
          type='url'
          name='avatar'
          placeholder='Ссылка на картинку'
          required />
        <span id='popup__input_avatar_error'
          className='popup__input_type_error' />

      </PopupWithForm>

      <ImagePopup card={selectedCard}
        name='view'
        isOpened={isImagePopupOpen}
        onClose={closeAllPopups} />

    </div>
  );
}

