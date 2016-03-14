import React from 'react';
import ReactDom from 'react-dom';
import KanbanBoardContainer from './KanbanBoardContainer';

const cardsList = [
  {
    id: 1,
    title: 'Read the Book',
    description: 'I should read the whole book',
    color: '#BD8D31',
    status: 'in-process',
    tasks: []
  },
  {
    id: 2,
    title: 'Write some code',
    description: 'Code along with the samples in this book',
    color: '#3A7E28',
    status: 'todo',
    tasks: [
      {
        id: 1,
        name: 'ContactList Example',
        done: true
      },
      {
        id: 2,
        name: 'Kanban Example',
        done: false
      },
      {
        id: 3,
        name: 'My own experiments',
        done: false
      }
    ]
  }
];

ReactDom.render(<KanbanBoardContainer />, document.getElementById('root'));

