import React from 'react';
import avatar from '../images/profile/member.png';

export default class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <section className="profile">
          <img className="profile__avatar" src={avatar} alt="Аватар пользователя" />
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
    )
  }
}