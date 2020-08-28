import React from 'react';
import logo from './images/header/logo.svg';

function App() {
  return (
    <div className="page">

      <header className="header">
        <img className="header__logo" src={logo} alt="Логотип" />
      </header>

      <main className="main">

        <section className="profile profile_hidden">
          <img className="profile__avatar" src="./images/profile/member.png" alt="Аватар пользователя" />
          <div className="profile__info">
            <div className="profile__title">
              <h1 className="profile__name">_</h1>
              <button className="profile__editbutton" type="button"></button>
            </div>
            <p className="profile__about"></p>
          </div>
          <button className="profile__addbutton" type="button"></button>
        </section>

        <section className="placesphotos">
        </section>

      </main>

      <footer className="footer">
        <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
      </footer>

      <section className="popup popup_profileedit">
        <form className="popup__container" action="#" method="POST" name="popupform" novalidate>
          <h2 className="popup__title">Редактировать профиль</h2>

          <input className="popup__input popup__input_name" type="text" name="name" placeholder="Имя" required minlength="2" maxlength="40" />
          <span id="popup__input_name_error" class="popup__input_type_error"></span>

          <input className="popup__input popup__input_about" type="text" name="about" placeholder="Описание" required minlength="2" maxlength="200" />
          <span id="popup__input_about_error" class="popup__input_type_error"></span>

          <button className="popup__submit" type="submit">Сохранить</button>
          <button className="popup__reset" type="button"></button>
        </form>
      </section>

      <section className="popup popup_newplace">
        <form className="popup__container" action="#" method="POST" name="popupplace" novalidate>
          <h2 className="popup__title">Новое место</h2>

          <input className="popup__input popup__input_photoname" type="text" name="photoName" placeholder="Название" required minlength="1" maxlength="30" />
          <span id="popup__input_photoName_error" className="popup__input_type_error"></span>

          <input className="popup__input popup__input_photourl" type="url" name="photoUrl" placeholder="Ссылка на картинку" required />
          <span id="popup__input_photoUrl_error" className="popup__input_type_error"></span>

          <button className="popup__submit" type="submit">Сохранить</button>
          <button className="popup__reset" type="button"></button>
        </form>
      </section>

      <section className="popup popup_newavatar">
        <form className="popup__container popup_avaeditor" action="#" method="POST" name="popupavatar" novalidate>
          <h2 className="popup__title">Обновить аватар</h2>

          <input className="popup__input popup__input_avatar" type="url" name="avatar" placeholder="Ссылка на картинку" required />
          <span id="popup__input_avatar_error" class="popup__input_type_error"></span>

          <button className="popup__submit" type="submit">Сохранить</button>
          <button className="popup__reset" type="button"></button>
        </form>
      </section>

      <section className="popup popup_confirm" action="#" method="POST" name="popupconfirm" novalidate>
        <form className="popup__container popup__question">
          <h2 className="popup__text">Вы уверены?</h2>
          <button className="popup__submit" type="submit">Да</button>
          <button className="popup__reset" type="button"></button>
        </form>
      </section>

      <section className="popup popup_view">
        <div className="popup__photoview">
          <img className="popup__image" alt="Просмотр фото" src="./images/placesphotos/not.png" />
          <h2 className="popup__imagetitle">_</h2>
          <button className="popup__reset" type="button"></button>
        </div>
      </section>

      <template id="card">
        <div className="photocard">
          <img className="photocard__viewport" src="#" alt="Фото места" />
          <button className="photocard__delete" type="button"></button>
          <div className="photocard__description">
            <h2 className="photocard__placename"></h2>
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

export default App;
