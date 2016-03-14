import React, {Component, PropTypes} from 'react';

class CheckList extends Component {
  static propTypes = {
    cardId: PropTypes.number,
    tasks: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object
  }

  checkInputKeyPress(evt) {
    if (evt.key === 'Enter') {
      this.props.taskCallbacks.add(this.props.cardId, evt.target.value);
      evt.target.value = '';
    }
  }

  render() {
    const tasks = this.props.tasks.map((task) => (
      <li key={task.id} className='checklist_task'>
        <input type='checkbox' defaultChecked={task.done} onChange={
          this.props.taskCallbacks.toggle.bind(null, this.props.cardId, task.id, task.taskIndex)
        }
        />
        {task.name}{' '}
        <a href='#' className='checklist_task--remove' onChange={
          this.props.taskCallbacks.toggle.bind(null, this.props.cardId, task.id, task.taskIndex)
        }
        />
      </li>
    ));

    return (
      <div className='checkList'>
        <ul>{tasks}</ul>
        <input
          type='text' className='checklist--add-task'
          placeholder='Type then hit Enter to add a task'
          onKeyPress={this.checkInputKeyPress.bind(this)}
        />
      </div>
    );
  }
}


export default CheckList;
