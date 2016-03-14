import React, {Component} from 'react';
import KanbanBoard from './KanbanBoard';
import 'whatwg-fetch';
import update from 'react-addons-update';

const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
  'Content-Type': 'application/json',
  Authorization: 'any-string-you-like'
};
class KanbanBoardCantainer extends Component {
  constructor(...args) {
    super(args);
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/cards`, {headers: API_HEADERS})
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({cards: responseData});
      window.state = this.state;
    })
    .catch((error) => {
      console.log('Error fetching and parsing data', error);
    });
  }

  addTask(cardId, taskName) {
    const preState = this.state;
    const cardIndex = this.state.cards.findIndex((card) => card.id === cardId);
    const newTask = {id: Date.now(), name: taskName, done: false};
    const nextState = update(this.state.cards, {
      [cardIndex]: {
        tasks: {$push: [newTask]}
      }
    });
    this.setState({cards: nextState});
    fetch(`${API_URL}/cards/${cardId}/tasks`, {
      method: 'post',
      headers: API_HEADERS,
      body: JSON.stringify(newTask)
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Server response was not OK');
    })
    .then((responseData) => {
      newTask.id = responseData.id;
      this.setState({cards: nextState});
    })
    .catch((error) => {
      this.setState(preState);
    });
  }

  deleteTask(cardId, taskId, taskIndex) {
    const cardIndex = this.state.cards.findIndex((card) => card.id === cardId);
    const prevState = this.state;
    const nextState = update(this.state.cards, {
      [cardIndex]: {
        task: {$splice: [[taskIndex, 1]]}
      }
    });
    this.setState({cards: nextState});
    fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
      method: `delete`,
      headers: API_HEADERS
    })
    .then((response) => {
      if (!reponse.ok) {
        throw new Error('Server reponse was not OK');
      }
    })
    .catch((error) => {
      console.error('Fetch error:', error);
      this.setState(preState);
    })
  }

  toggleTask(cardId, taskId, taskIndex) {
    const preState = this.state;
    const cardIndex = this.state.cards.findIndex((card) => card.id === cardId);
    let newDoneValue;
    const nextState = update(
      this.state.cards, {
        [cardIndex]: {
          tasks: {
            [taskIndex]: {
              done: {
                $apply: (done) => {
                  newDoneValue = !done;
                  return newDoneValue;
                }
              }
            }
          }
        }
      }
    );
    this.setState({cards: nextState});
    fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
      method: 'put',
      headers: API_HEADERS,
      body: JSON.stringify({done: newDoneValue})
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Server response was not OK');
      }
    })
    .then((error) => {
      console.error('Fetch error:', error);
      this.setState(preState);
    });
  }

  render() {
    return (
      <KanbanBoard cards={this.state.cards}
        taskCallbacks={{
          toggle: this.toggleTask.bind(this),
          delete: this.deleteTask.bind(this),
          add: this.addTask.bind(this)
        }}
      />);
  }
}

export default KanbanBoardCantainer;
