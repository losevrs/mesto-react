import React from 'react';
import errorImage from '../images/onerror.jpg';
import { api } from '../utils/Api';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.link
    }
  }

  onErrorImage = () => {
    this.setState({
      image: errorImage
    })
  }

  render() {
    return (
      <div className="photocard">
        <img className="photocard__viewport"
          src={this.state.image} alt="Фото места" 
          onError={this.onErrorImage}/>
        <button className="photocard__delete" type="button"></button>
        <div className="photocard__description">
          <h2 className="photocard__placename">{this.props.name}</h2>
          <div className="photocard__likes">
            <button className="photocard__like" type="button"></button>
            <span className="photocard__count">{this.props.likes.length}</span>
          </div>
        </div>
      </div>
    );
  }
}