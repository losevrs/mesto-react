import React from 'react';

export default class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      title: props.title,
      buttonTitle: props.buttonTitle
    };
  }
  render() {
    return (
      <section className={`popup popup_${this.state.name}`} action="#" method="POST" name={`${this.state.name}`} noValidate >
        <form className="popup__container">
          <h2 className="popup__title">{`${this.state.title}`}</h2>
          {this.props.children}
          <button className="popup__submit" type="submit">{this.state.buttonTitle}</button>
          <button className="popup__reset" type="button"></button>
        </form>
      </section>
    );
  }
}