import React from 'react'
import errorImage from '../images/onerror.jpg';

export default class ImageWithError extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      hasErrorOnLoad: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.hasErrorOnLoad) {
      return {
        image: props.src
      }
    } else {
      return {
        image: errorImage,
        hasErrorOnLoad: false
      }
    }
  }

  onLoadImageError = () => {
    this.setState({
      hasErrorOnLoad: true
    })
  }

  render() {
    return (
      <img className={this.props.className}
        src={this.state.image}
        alt={this.props.alt}
        onError={this.onLoadImageError}
        onClick={this.props.onClick} />
    );
  };
}