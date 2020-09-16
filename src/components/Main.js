import React from 'react';
import ImageWithError from './ImageWithError'

import Card from './Card';
import { useCurentUserContext } from '../contexts/CurrentUserContext';

export default (props) => {

  const handleAddPlaceClick = props.onAddPlace.bind(this);
  const handleEditProfileClick = props.onEditProfile.bind(this);
  const handleEditAvatarClick = props.onEditAvatar.bind(this);

  const currentUser = useCurentUserContext();

  return (
    <main className='main'>
      <section className={`profile ${props.isHidden && 'profile_hidden'}`}>
        <div className='profile__avatar-overlay'
          onClick={handleEditAvatarClick} >
          <ImageWithError className='profile__avatar'
            src={currentUser.avatar}
            alt='Аватар пользователя' />
        </div>
        <div className='profile__info'>
          <div className='profile__title'>
            <h1 className='profile__name'>{currentUser.name}</h1>
            <button className='profile__editbutton'
              onClick={handleEditProfileClick}
              type='button' />
          </div>
          <p className='profile__about'>{currentUser.about}</p>
        </div>
        <button className='profile__addbutton'
          onClick={handleAddPlaceClick}
          type='button' />
      </section>

      <section className='placesphotos'>
        {props.cards.map(card =>
          <Card key={card._id}
            card={card}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />)}
      </section>
    </main>
  );
}