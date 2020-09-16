import React from 'react';
import ImageWithError from './ImageWithError'

import Card from './Card';
import { useCurentUserContext } from '../contexts/CurrentUserContext';

import { api } from '../utils/Api';

export default (props) => {

  const [cards, setCards] = React.useState([]);

  const handleAddPlaceClick = props.onAddPlace.bind(this);
  const handleEditProfileClick = props.onEditProfile.bind(this);
  const handleEditAvatarClick = props.onEditAvatar.bind(this);

  const currentUser = useCurentUserContext();

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((item) => { return item._id === currentUser._id; });

    api.like(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch((error) => console.log('Ошибка обработки Like -> ' + error))
  }

  const handleCardDelete = (card) => {
    api.deleteCard(card._id)
      .then(() => {
        const newCards = [...cards];
        const index = cards.findIndex((item) => { return item._id === card._id });
        newCards.splice(index, 1);
        setCards(newCards);
      })
      .catch((error) => console.log('Ошибка удаления карточки -> ' + error))
  }

  React.useEffect(() => {
    api.getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((error) => console.log('Ошибка запроса карточек -> ' + error))
  }, []);

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
        {cards.map(card =>
          <Card key={card._id}
            card={card}
            onCardClick={props.onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />)}
      </section>
    </main>
  );
}