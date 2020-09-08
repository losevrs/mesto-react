import React from 'react';
import ImageWithError from './ImageWithError'

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.card.link
    }
  }

  handleClick = () => {
    this.props.onCardClick(this.props.card);
  }

  render() {
    return (
      <div className="photocard">
        <ImageWithError className="photocard__viewport"
          src={this.state.image}
          alt="Фото места"
          onClick={this.handleClick} />
        <button className="photocard__delete"
          type="button" />
        <div className="photocard__description">
          <h2 className="photocard__placename">{this.props.card.name}</h2>
          <div className="photocard__likes">
            <button className="photocard__like"
              type="button" />
            <span className="photocard__count">{this.props.card.likes.length}</span>
          </div>
        </div>
      </div>
    );
  }
}