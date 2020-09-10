import React from 'react';
import avatar from '../images/profile/member.png';
import ImageWithError from './ImageWithError'

import Card from './Card';
import { api } from '../utils/Api';

export default (props) => {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState(avatar);
  const [cards, setCards] = React.useState([]);
  const [isHidden, setIsHidden] = React.useState(false);

  const handleAddPlaceClick = props.onAddPlace.bind(this);
  const handleEditProfileClick = props.onEditProfile.bind(this);
  const handleEditAvatarClick = props.onEditAvatar.bind(this);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userInfo, initialCards]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setCards(initialCards);
      })
      .catch((error) => console.log('Ошибка запроса -> ' + error))
      .finally(() => {
        setIsHidden(false);
      });
  }, []);

  return (
    <main className='main'>
      <section className={`profile ${isHidden && 'profile_hidden'}`}>
        <div className='profile__avatar-overlay'
          onClick={handleEditAvatarClick} >
          <ImageWithError className='profile__avatar'
            src={userAvatar}
            alt='Аватар пользователя' />
        </div>
        <div className='profile__info'>
          <div className='profile__title'>
            <h1 className='profile__name'>{userName}</h1>
            <button className='profile__editbutton'
              onClick={handleEditProfileClick}
              type='button' />
          </div>
          <p className='profile__about'>{userDescription}</p>
        </div>
        <button className='profile__addbutton'
          onClick={handleAddPlaceClick}
          type='button' />
      </section>

      <section className='placesphotos'>
        {cards.map(card =>
          <Card key={card._id}
            card={card}
            onCardClick={props.onCardClick} />)}
      </section>
    </main>
  );
}