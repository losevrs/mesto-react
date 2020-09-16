import React from 'react';
import ImageWithError from './ImageWithError'

import { useCurentUserContext } from '../contexts/CurrentUserContext';

export default (props) => {
  const currentUser = useCurentUserContext();

  const canAddDelete = props.card.owner._id === currentUser._id;
  const likeShow = props.card.likes.some((item) => { return item._id === currentUser._id; });

  const handleCardClick = () => {
    props.onCardClick(props.card);
  }

  const handleCardLike = () => {
    props.onCardLike(props.card);
  }

  const handleCardDelete = () => {
    props.onCardDelete(props.card);
  }

  return (
    <div className='photocard'>
      <ImageWithError className='photocard__viewport'
        src={props.card.link}
        alt='Фото места'
        onClick={handleCardClick}
        onError={null} />

      <button className={`photocard__delete ${canAddDelete && 'photocard__delete_show'}`}
        type='button'
        onClick={handleCardDelete}
      />

      <div className='photocard__description'>
        <h2 className='photocard__placename'>{props.card.name}</h2>
        <div className='photocard__likes'>
          <button className={`photocard__like ${likeShow && 'photocard__like_on'}`}
            type='button'
            onClick={handleCardLike}
          />
          <span className='photocard__count'>{props.card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}