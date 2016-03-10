import React, {Component, PropTypes} from 'react';
import CheckList from './CheckList';

class Card extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    tasks: PropTypes.array
  }

  constructor() {
    super();
    this.state = {
      showDetails: true
    };
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

    return (
      <div className='card'>
        <div className='card_title'
          onClick={
            () => this.setState({showDetails: !this.state.showDetails})
          }
        >{this.props.title}</div>
        {cardDetails}
      </div>
    );
  }
}

export default Card;
