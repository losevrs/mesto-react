import React from 'react';
import ImageWithError from './ImageWithError'

export default (props) => {

  const handleCardClick = () => {
    props.onCardClick(props.card);
  }

  return (
    <div className='photocard'>
      <ImageWithError className='photocard__viewport'
        src={props.card.link}
        alt='Фото места'
        onClick={handleCardClick}
        onError={null} />
      <button className='photocard__delete'
        type='button' />
      <div className='photocard__description'>
        <h2 className='photocard__placename'>{props.card.name}</h2>
        <div className='photocard__likes'>
          <button className='photocard__like'
            type='button' />
          <span className='photocard__count'>{props.card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}