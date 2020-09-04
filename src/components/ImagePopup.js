import React from 'react';
import Popup from './Popup';
import ImageWithError from './ImageWithError'

export default class ImagePopup extends React.Component {
  render() {
    return (
      <Popup
        name={this.props.name}
        isOpened={this.props.isOpened}
        onClose={this.props.onClose}>
        <div className="popup__photoview">
          <ImageWithError className="popup__image"
            alt="Просмотр фото" 
            src={this.props.card.link} />
          <h2 className="popup__imagetitle">{this.props.card.name}</h2>
          <button className="popup__reset" type="button" onClick={this.props.onClose}></button>
        </div>
      </Popup>
    );
  }
}