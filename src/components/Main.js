import React from 'react';
import avatar from '../images/profile/member.png';
import ImageWithError from './ImageWithError'

import Card from './Card';
import { api } from '../utils/Api';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userDescription: '',
      userAvatar: avatar,
      cards: [],
      hidden: true
    };

    this.handleAddPlaceClick = props.onAddPlace;
  }

  componentDidMount() {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userInfo, initialCards]) => {
        this.setState({
          userName: userInfo.name,
          userDescription: userInfo.about,
          userAvatar: userInfo.avatar,
          cards: initialCards
        })
      })
      .catch((error) => console.log('Ошибка запроса -> ' + error))
      .finally(() => {
        this.setState({ hidden: false });
      });
  }

  render() {
    return (
      <main className='main'>
        <section className={`profile ${this.state.hidden && 'profile_hidden'}`}>
          <ImageWithError className='profile__avatar'
            src={this.state.userAvatar}
            alt='Аватар пользователя'
            onClick={this.props.onEditAvatar} />
          <div className='profile__info'>
            <div className='profile__title'>
              <h1 className='profile__name'>{this.state.userName}</h1>
              <button className='profile__editbutton'
                onClick={this.props.onEditProfile}
                type="button" />
            </div>
            <p className='profile__about'>{this.state.userDescription}</p>
          </div>
          <button className='profile__addbutton'
            onClick={this.props.onAddPlace}
            type="button" />
        </section>

        <section className='placesphotos'>
          {this.state.cards.map(card =>
            <Card key={card._id}
              card={card}
              onCardClick={this.props.onCardClick} />)}
        </section>
      </main>
    );
  }
}