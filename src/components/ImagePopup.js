import React from 'react';
import notImage from '../images/placesphotos/not.png';

export default class ImagePopup extends React.Component {
  render() {
    return (
      <section className="popup popup_view">
        <div className="popup__photoview">
          <img className="popup__image" alt="Просмотр фото" src={notImage} />
          <h2 className="popup__imagetitle">_</h2>
          <button className="popup__reset" type="button"></button>
        </div>
      </section>
    );
  }
}