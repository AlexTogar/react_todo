import React, { Component } from 'react';

export default class Task extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleToggleCompleteTask = this.handleToggleCompleteTask.bind(this);
    this.handleToggleImportantTask = this.handleToggleImportantTask.bind(this);
    this.handleUpdateTask = this.handleUpdateTask.bind(this);
  }
  handleDeleteTask(id) {
    this.props.onDeleteTask(id);
  }

  handleToggleCompleteTask(id) {
    this.props.onToggleCompleteTask(id);
  }

  handleToggleImportantTask(id) {
    this.props.onToggleImportantTask(id);
  }

  handleUpdateTask() {}

  render() {
    const task = this.props.task;

    return (
      <>
        <span onClick={() => this.handleToggleCompleteTask(task.id)}>
          {task.completed ? '✔' : 'O'}--
        </span>
        <span
          style={{
            textDecoration: task.completed ? 'line-through' : 'inherit',
          }}
        ></span>
        <span
          onClick={() => {
            this.handleToggleImportantTask(task.id);
          }}
        >
          {task.text}---{task.important ? 'important' : 'not important'}
        </span>
        <button
          onClick={() => {
            this.handleDeleteTask(task.id);
          }}
        >
          X
        </button>
      </>
    );
  }
}
