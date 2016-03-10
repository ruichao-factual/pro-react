import React, {Component, PropTypes} from 'react';

class CheckList extends Component {
  static propTypes = {
    tasks: PropTypes.array
  }

  render() {
    const tasks = this.props.tasks.map((task) => (
      <li className='checklist_task'>
        <input type='checkbox' defaultChecked={task.done} />
        {task.name}
        <a href='#' className='checklist_task--remove' />
      </li>
    ));

    return (
      <div className='checkList'>
        <ul>{tasks}</ul>
      </div>
    );
  }
}


export default CheckList;
