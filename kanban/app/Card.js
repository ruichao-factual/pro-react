import React, {Component, PropTypes} from 'react';
import CheckList from './CheckList';

const titlePropType = (props, propName, componentName) => {
  if (props[propName]) {
    const value = props[propName];
    if (typeof value !== 'string' || value.length > 80) {
      return new Error(
        `${propName} in ${componentName} is longer than 80 characters`
      );
    }
  }
  return null;
};

class Card extends Component {
  static propTypes = {
    title: titlePropType,
    description: PropTypes.string,
    color: PropTypes.string,
    id: PropTypes.number,
    tasks: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object
  }

  constructor() {
    super();
    this.state = {
      showDetails: true
    };
  }

  toggleDetails() {
    this.setState({showDetails: !this.state.showDetails});
  }


  render() {
    let cardDetails;
    if (this.state.showDetails) {
      cardDetails = (
        <div className='card_details'>
          {this.props.description}
          <CheckList cardId={this.props.id} tasks={this.props.tasks} taskCallbacks={this.props.taskCallbacks} />
        </div>
      );
    }

    const sideColor = {
      position: 'absolute',
      zIndex: -1,
      top: 0,
      bottom: 0,
      left: 0,
      width: 7,
      backgroundColor: this.props.color
    };

    return (
      <div className='card'>
        <div style={sideColor} />
        <div
          className={this.state.showDetails ? 'card_title card_title--is-open' : 'card_title'}
          onClick={this.toggleDetails.bind(this)}>
          {this.props.title}
        </div>
        {cardDetails}
      </div>
    );
  }
}

export default Card;
