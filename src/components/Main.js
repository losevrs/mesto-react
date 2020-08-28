import React from 'react';
import avatar from '../images/profile/member.png';

export default class Main extends React.Component {

  handleEditAvatarClick = () => {
    const popupElement = document.querySelector('.popup_newavatar');
      if (!popupElement.classList.contains('popup_opened')) {
        popupElement.classList.add('popup_opened');
      }
  };

  handleEditProfileClick = () => {
    const popupElement = document.querySelector('.popup_profileedit');
      if (!popupElement.classList.contains('popup_opened')) {
        popupElement.classList.add('popup_opened');
      }
  };

  handleAddPlaceClick = () => {
    const popupElement = document.querySelector('.popup_newplace');
      if (!popupElement.classList.contains('popup_opened')) {
        popupElement.classList.add('popup_opened');
      }
  };

  render() {
    return (
      <main className="main">
        <section className="profile">
          <img className="profile__avatar" src={avatar} alt="Аватар пользователя" onClick={this.handleEditAvatarClick}/>
          <div className="profile__info">
            <div className="profile__title">
              <h1 className="profile__name">_</h1>
              <button className="profile__editbutton" onClick={this.handleEditProfileClick} type="button"></button>
            </div>
            <p className="profile__about"></p>
          </div>
          <button className="profile__addbutton" onClick={this.handleAddPlaceClick} type="button"></button>
        </section>

        <section className="placesphotos">
        </section>

      </main>
    )
  }
}