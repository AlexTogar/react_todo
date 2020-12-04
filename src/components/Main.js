import React, { Component } from 'react';
import TaskContainer from './TaskContainer';

/* 
Contains active tasks list, completed tasks,
input field for creating new tasks
*/
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createTaskInputValue: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleCreateTask = this.handleCreateTask.bind(this);
  }

  handleInput(e) {
    this.setState(() => {
      return { createTaskInputValue: e.target.value };
    });
  }

  handleCreateTask(e) {
    e.preventDefault();
    const inputValue = this.state.createTaskInputValue;
    if (inputValue) {
      this.props.onCreateTask(inputValue, this.props.currentCategory.id);
      this.setState({
        createTaskInputValue: '',
      });
    }
  }

  toggleTaskContainer(e) {
    const target = e.currentTarget.querySelector(
      '.completed-task-container__arrow'
    );
    const completedTaskContainer = e.currentTarget.parentElement;

    const taskContainer = e.currentTarget.parentElement.querySelector(
      '.task-container'
    );

    completedTaskContainer.classList.toggle('completed-task-container_hidden');
    taskContainer.classList.toggle('task-container_hidden');
    target.classList.toggle('completed-task-container__arrow_down');
    target.classList.toggle('completed-task-container__arrow_right');
  }

  render() {
    const currentCategory = this.props.currentCategory;
    const currentTasks = this.props.currentTasks;
    const completedTasks = this.props.completedTasks;
    return (
      <div className='main'>
        <div className='main__title'>
          <div
            className={`main__title-icon sidebar__cat-icon_${currentCategory.icon} icon `}
          ></div>
          <p className='main__title-text'>{currentCategory.name}</p>
        </div>
        <div className='active-task-container'>
          <TaskContainer
            category={currentCategory}
            tasks={currentTasks}
            onDeleteTask={this.props.onDeleteTask}
            onToggleCompleteTask={this.props.onToggleCompleteTask}
            onToggleImportantTask={this.props.onToggleImportantTask}
            onUpdateTask={this.props.onUpdateTask}
          />
        </div>

        <div className='completed-task-container'>
          <div
            className='completed-task-container__toggle'
            onClick={this.toggleTaskContainer}
          >
            <div className='completed-task-container__arrow completed-task-container__arrow_down icon'></div>
            <p className='completed-task-container__text'>
              Completed
              <span className='completed-task-container__tasks-number'>
                {completedTasks.length}
              </span>
            </p>
          </div>
          <TaskContainer
            tasks={completedTasks}
            onDeleteTask={this.props.onDeleteTask}
            onToggleCompleteTask={this.props.onToggleCompleteTask}
            onToggleImportantTask={this.props.onToggleImportantTask}
            onUpdateTask={this.props.onUpdateTask}
          />
        </div>
        <div className='main__input input'>
          <div className='main__icon icon'></div>
          <form className='main__form' onSubmit={this.handleCreateTask}>
            <input
              type='text'
              className='input-field main__input-field'
              placeholder='Add a task'
              value={this.state.createTaskInputValue}
              onChange={this.handleInput}
            />
          </form>
        </div>
      </div>
    );
  }
}
