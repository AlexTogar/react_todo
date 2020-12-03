import React, { Component } from 'react';

export default class TaskContainer extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleToggleCompleteTask = this.handleToggleCompleteTask.bind(this);
    this.handleToggleImportantTask = this.handleToggleImportantTask.bind(this);
    this.handleUpdateTask = this.handleUpdateTask.bind(this);
  }

  handleDeleteTask(e) {
    this.props.onDeleteTask(id);
  }

  handleToggleCompleteTask(e) {
    this.props.onToggleCompleteTask(id);
  }

  handleToggleImportantTask(e) {
    const id = e.currentTarget.attributes.taskid.value;
    this.props.onToggleImportantTask(id);
  }

  handleUpdateTask(e) {}

  render() {
    const category = this.props.category;
    const tasks = this.props.tasks.map((task) => {
      return (
        <div
          className={`task-container__task ${
            task.completed ? 'task-container__task_checked' : ''
          }`}
        >
          <input type='checkbox' className='task-container__task-checkbox' />
          <input
            className='task-container__task-text'
            value={task.text}
            type='text'
            disabled
          />
          <div
            className={`task-container__task-star ${
              task.important ? 'task-container__task-star_acitve' : ''
            } icon`}
            onClick={this.handleToggleImportantTask}
            taskid={task.id}
          ></div>
        </div>
      );
    });

    return <div className='task-container'>{tasks}</div>;
  }
}
