import React from 'react';

export default class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      onClose: props.onClose
    }
  }

  closeOnOverlay = (event) => {
    if (event.target === document.querySelector(`.popup_${this.state.name}`)) {
      this.state.onClose();
    }
  }
  
  render() {
    return (
      <section className={`popup popup_${this.props.name} ${this.props.isOpened && "popup_opened"}`}
        action="#" method="POST" name={`${this.props.name}`} noValidate 
        onClick={this.closeOnOverlay}>
        <form className="popup__container">
          <h2 className="popup__title">{`${this.props.title}`}</h2>
          {this.props.children}
          <button className="popup__submit" type="submit">{this.props.buttonTitle}</button>
          <button className="popup__reset" type="button" onClick={this.state.onClose}></button>
        </form>
      </section>
    );
  }
}