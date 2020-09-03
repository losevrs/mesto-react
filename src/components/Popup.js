import React from 'react';

export default class Popup extends React.Component {
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
        onClick={this.closeOnOverlay}
        ref={this.popupOverlay}>
        {this.props.children}
      </section>
    );
  }
}