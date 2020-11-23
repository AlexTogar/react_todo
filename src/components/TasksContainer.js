import React, { Component } from 'react';

export default class TasksContainer extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleCompleteTask = this.handleCompleteTask.bind(this);
    this.handleMarkAsImportantTask = this.handleMarkAsImportantTask.bind(this);
    this.handleUpdateTask = this.handleUpdateTask.bind(this);
  }
  // onDeleteTask={this.props.onDeleteTask}
  // onCompleteTask={this.props.onCompleteTask}
  // onMarkAsImportantTask={this.props.onMarkAsImportantTask}
  // onUpdateTask={this.props.onUpdateTask}

  handleDeleteTask(id) {
    this.props.onDeleteTask(id);
  }

  handleCompleteTask() {}

  handleMarkAsImportantTask() {}

  handleUpdateTask() {}

  render() {
    const tasks = this.props.tasks.map((task) => {
      return (
        <li className='TasksContainer__task' key={task.id}>
          {task.text}---{task.important ? '★' : ''}
          <button
            onClick={() => {
              this.handleDeleteTask(task.id);
            }}
          >
            X
          </button>
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
