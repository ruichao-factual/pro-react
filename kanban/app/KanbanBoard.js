import React, {Component, PropTypes} from 'react';
import List from './List';

class KanbanBoard extends Component {
  static propTypes = {
    cards: PropTypes.array.isRequired
  }
  render() {
    return (
      <div className='app'>
        <List id='todo' title='To Do' cards={
          this.props.cards.filter((card) => card.status === 'todo')
        }
        />

        <List id='in-progress' title='In Progress' cards={
          this.props.cards.filter((card) => card.status === 'in-progress')
        }
        />

        <List id='done' title='Done' cards={
          this.props.cards.filter((card) => card.status === 'Done')
        }
        />
      </div>
    );
  }
}

export default KanbanBoard;
