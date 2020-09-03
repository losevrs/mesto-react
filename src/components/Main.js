import React from 'react';
import avatar from '../images/profile/member.png';
import {api} from '../utils/Api';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userDescription: '',
      userAvatar: avatar
    };

    this.handleEditAvatarClick = props.onEditAvatar;
    this.handleEditProfileClick = props.onEditProfile;
    this.handleAddPlaceClick = props.onAddPlace;
  }

  componentDidMount() {
    Promise.all([api.getUserInfo()])
      .then(([userInfo]) => {
        this.setState({
          userName: userInfo.name,
          userDescription: userInfo.about,
          userAvatar: userInfo.avatar
        })
      })
      .catch((error) => console.log('Ошибка запроса -> ' + error));
  }

  render() {
    return (
      <main className="main">
        <section className="profile">
          <img className="profile__avatar" src={this.state.userAvatar} alt="Аватар пользователя" onClick={this.handleEditAvatarClick} />
          <div className="profile__info">
            <div className="profile__title">
              <h1 className="profile__name">{this.state.userName}</h1>
              <button className="profile__editbutton" onClick={this.handleEditProfileClick} type="button"></button>
            </div>
            <p className="profile__about">{this.state.userDescription}</p>
          </div>
          <button className="profile__addbutton" onClick={this.handleAddPlaceClick} type="button"></button>
        </section>

        <section className="placesphotos">
        </section>

      </main>
    );
  }
}