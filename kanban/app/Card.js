import React, {Component, PropTypes} from 'react';
import CheckList from './CheckList';

class Card extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    color: PropTypes.string,
    id: PropTypes.number,
    tasks: PropTypes.array
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
          <CheckList cardId={this.props.id} tasks={this.props.tasks} />
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
