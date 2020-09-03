import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

export default class App extends React.Component {
  render() {
    return (
      <div className="page">

        <Header />
        <Main />
        <Footer />

        <PopupWithForm name="profileedit" title="Редактировать профиль" buttonTitle="Сохранить">
          <input className="popup__input popup__input_name popup__input_top" type="text" name="name" placeholder="Имя" required minLength="2" maxLength="40" />
          <span id="popup__input_name_error" className="popup__input_type_error"></span>

          <input className="popup__input popup__input_about" type="text" name="about" placeholder="Описание" required minLength="2" maxLength="200" />
          <span id="popup__input_about_error" className="popup__input_type_error"></span>
        </PopupWithForm>

        <PopupWithForm name="newplace" title="Новое место" buttonTitle="Сохранить">
          <input className="popup__input popup__input_photoname popup__input_top" type="text" name="photoName" placeholder="Название" required minLength="1" maxLength="30" />
          <span id="popup__input_photoName_error" className="popup__input_type_error"></span>

          <input className="popup__input popup__input_photourl" type="url" name="photoUrl" placeholder="Ссылка на картинку" required />
          <span id="popup__input_photoUrl_error" className="popup__input_type_error"></span>
        </PopupWithForm>

        <PopupWithForm name="confirm" title="Вы уверены?" buttonTitle="Да" />

        <PopupWithForm name="newavatar" title="Обновить аватар" buttonTitle="Сохранить">
          <input className="popup__input popup__input_avatar  popup__input_top" type="url" name="avatar" placeholder="Ссылка на картинку" required />
          <span id="popup__input_avatar_error" className="popup__input_type_error"></span>
        </PopupWithForm>

        <ImagePopup />

        <template id="card">
          <div className="photocard">
            <img className="photocard__viewport" src="#" alt="Фото места" />
            <button className="photocard__delete" type="button"></button>
            <div className="photocard__description">
              <h2 className="photocard__placename">_</h2>
              <div className="photocard__likes">
                <button className="photocard__like" type="button"></button>
                <span className="photocard__count">0</span>
              </div>
            </div>
          </div>
        </template>

      </div>
    );
  }
}

