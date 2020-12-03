import React, { Component } from 'react';
import TaskContainer from './TaskContainer';

export default class CompletedTaskContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tasks = this.props.tasks;
    return (
      <div className='completed-task-container'>
        <div className='completed-task-container__toggle'>
          <div className='completed-task-container__arrow completed-task-container__arrow_down icon'></div>
          <p className='completed-task-container__text'>
            Completed
            <span className='completed-task-container__tasks-number'>274</span>
          </p>
        </div>
        <TaskContainer
          tasks={tasks}
          onDeleteTask={this.props.onDeleteTask}
          onToggleCompleteTask={this.props.onToggleCompleteTask}
          onToggleImportantTask={this.props.onToggleImportantTask}
          onUpdateTask={this.props.onUpdateTask}
        />
      </div>
    );
  }
}
