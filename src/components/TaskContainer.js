import React, { Component } from 'react';

export default class TaskContainer extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleToggleCompleteTask = this.handleToggleCompleteTask.bind(this);
    this.handleToggleImportantTask = this.handleToggleImportantTask.bind(this);
    this.handleUpdateTask = this.handleUpdateTask.bind(this);
    this.enableTaskInput = this.enableTaskInput.bind(this);
    this.disableTaskInput = this.disableTaskInput.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleDeleteTask(e) {
    console.log('click');
    const id = e.target.parentElement.attributes.taskid.value;
    this.props.onDeleteTask(id);
  }

  handleToggleCompleteTask(e) {
    const taskElement = e.currentTarget.parentElement;
    taskElement.classList.toggle('task-container__task_checked');
    setTimeout(() => {
      const id = taskElement.attributes.taskid.value;
      this.props.onToggleCompleteTask(id);
    }, 150);
  }

  handleToggleImportantTask(e) {
    const id = e.target.parentElement.attributes.taskid.value;
    this.props.onToggleImportantTask(id);
  }

  handleUpdateTask(e) {}

  enableTaskInput(e) {
    e.target.disabled = false;
  }

  disableTaskInput(e) {
    e.target.disabled = true;
  }

  handleInput(e) {
    const id = e.currentTarget.attributes.taskid.value;
    const text = e.target.value;
    this.props.onUpdateTask(id, text);
  }

  render() {
    const category = this.props.category;
    const tasks = this.props.tasks.map((task) => {
      return (
        <div
          className={`task-container__task ${
            task.completed ? 'task-container__task_checked' : ''
          }`}
          key={task.id}
          taskid={task.id}
          onClick={this.enableTaskInput}
          onBlur={this.disableTaskInput}
          onChange={this.handleInput}
        >
          <div
            className='task-container__pseudo-checkbox'
            onClick={this.handleToggleCompleteTask}
          ></div>
          <input type='checkbox' className='task-container__task-checkbox' />
          <input
            style={
              task.completed
                ? {
                    color: '#939393',
                    textDecoration: 'line-through',
                  }
                : {}
            }
            className='task-container__task-text'
            value={task.text}
            type='text'
            disabled
          />

          <div
            className='icon application__trash-icon'
            onClick={this.handleDeleteTask}
          ></div>

          <div
            className={`task-container__task-star ${
              task.important ? 'task-container__task-star_acitve' : ''
            } icon`}
            onClick={this.handleToggleImportantTask}
          ></div>
        </div>
      );
    });

    return <div className='task-container'>{tasks}</div>;
  }
}
