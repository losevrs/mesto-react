import React from 'react';

export default class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
    this.popupOverlay = React.createRef();
  }

  closeOnOverlay = (event) => {
    if (event.target === this.popupOverlay.current) {
      this.props.onClose();
    }
  }
  
  render() {
    return (
      <section className={`popup popup_${this.props.name} ${this.props.isOpened && "popup_opened"}`}
        action="#" method="POST" name={`${this.props.name}`} noValidate 
        onClick={this.closeOnOverlay}
        ref={this.popupOverlay}>
        <form className="popup__container">
          <h2 className="popup__title">{`${this.props.title}`}</h2>
          {this.props.children}
          <button className="popup__submit" type="submit">{this.props.buttonTitle}</button>
          <button className="popup__reset" type="button" onClick={this.props.onClose}></button>
        </form>
      </section>
    );
  }
}