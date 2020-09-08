import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      selectedCard: {},
      isImagePopupOpen: false
    };
  }

  closeAllPopups = () => {
    this.setState({
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      selectedCard: {},
      isImagePopupOpen: false
    });
  }

  handleCardClick = (card) => {
    this.setState({
      selectedCard: card,
      isImagePopupOpen: true
    });
  }

  handleEditAvatarClick = () => {
    this.setState({ isEditAvatarPopupOpen: true });
  };

  handleEditProfileClick = () => {
    this.setState({ isEditProfilePopupOpen: true });
  };

  handleAddPlaceClick = () => {
    this.setState({ isAddPlacePopupOpen: true });
  };

  render() {
    return (
      <div className='page'>

        <Header />

        <Main onEditProfile={this.handleEditProfileClick}
          onAddPlace={this.handleAddPlaceClick}
          onEditAvatar={this.handleEditAvatarClick}
          onCardClick={this.handleCardClick} />

        <Footer />

        <PopupWithForm name='profileedit'
          title='Редактировать профиль'
          buttonTitle='Сохранить'
          isOpened={this.state.isEditProfilePopupOpen}
          onClose={this.closeAllPopups}>

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
          isOpened={this.state.isAddPlacePopupOpen}
          onClose={this.closeAllPopups}>

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
          buttonTitle='Да' />

        <PopupWithForm name='newavatar'
          title='Обновить аватар'
          buttonTitle='Сохранить'
          isOpened={this.state.isEditAvatarPopupOpen}
          onClose={this.closeAllPopups}>

          <input className='popup__input popup__input_avatar  popup__input_top'
            type='url' name='avatar' placeholder='Ссылка на картинку'
            required />
          <span id='popup__input_avatar_error'
            className='popup__input_type_error' />

        </PopupWithForm>

        <ImagePopup card={this.state.selectedCard}
          name='view'
          isOpened={this.state.isImagePopupOpen}
          onClose={this.closeAllPopups} />

      </div>
    );
  }
}

