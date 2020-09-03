import React from 'react';

export default class ImagePopup extends React.Component {
  render() {
    console.log(this.props);
    return (
      <section className={`popup popup_view ${this.props.isOpened && "popup_opened"}`}>
        <div className="popup__photoview">
          <img className="popup__image" alt="Просмотр фото" src={this.props.card.link} />
          <h2 className="popup__imagetitle">{this.props.card.name}</h2>
          <button className="popup__reset" type="button" onClick={this.props.onClose}></button>
        </div>
      </section>
    );
  }
}