import React, {Component, PropTypes} from 'react';

class CheckList extends Component {
  static propTypes = {
    tasks: PropTypes.array
  }

  render() {
    const tasks = this.props.tasks.map((task) => (
      <li key={task.id} className='checklist_task'>
        <input type='checkbox' defaultChecked={task.done} />
        {task.name}
        <a href='#' className='checklist_task--remove' />
      </li>
    ));

    return (
      <div className='checkList'>
        <ul>{tasks}</ul>
        <input type='text' className='checklist--add-task' placeholder='Type then hit Enter to add a task' />
      </div>
    );
  }
}


export default CheckList;
