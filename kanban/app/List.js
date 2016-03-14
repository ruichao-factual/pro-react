import React, {Component, PropTypes} from 'react';
import Card from './Card';

class List extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object
  }

  render() {
    const cards = this.props.cards.map((card) => {
      return (
        <Card
          key={card.id}
          taskCallbacks={this.props.taskCallbacks}
          {...card}
        />
      );
    });

    return (
      <div className='list'>
        <h1>{this.props.title}</h1>
        {cards}
      </div>
    );
  }
}

export default List;
