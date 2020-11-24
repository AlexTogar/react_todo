import React, { Component } from 'react';
import Task from './Task';

export default class TasksContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tasks = this.props.tasks.map((task) => {
      return (
        <li className='TasksContainer__task' key={task.id}>
          <Task
            task={task}
            onDeleteTask={this.props.onDeleteTask}
            onToggleCompleteTask={this.props.onToggleCompleteTask}
            onToggleImportantTask={this.props.onToggleImportantTask}
            onUpdateTask={this.props.onUpdateTask}
          />
        </li>
      );
    });
    return (
      <div className='TasksContainer'>
        <ul>{tasks}</ul>
      </div>
    );
  }
}
