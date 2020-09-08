import React from 'react';
import Popup from './Popup';

export default class PopupWithForm extends React.PureComponent {
  render() {
    return (
      <Popup
        name={this.props.name}
        isOpened={this.props.isOpened}
        onClose={this.props.onClose}>
        <form className="popup__container" action="#" method="POST" name={`${this.props.name}`} noValidate >
          <h2 className="popup__title">{`${this.props.title}`}</h2>
          {this.props.children}
          <button className="popup__submit" type="submit">{this.props.buttonTitle}</button>
          <button className="popup__reset" type="button" onClick={this.props.onClose}/>
        </form>
      </Popup>
    );
  }
}