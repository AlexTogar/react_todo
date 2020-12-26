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
    this.toggleContainerButtonRef = React.createRef();
    this.taskContainerRef = React.createRef();
    this.completedTaskContainerRef = React.createRef();

    this.handleInput = this.handleInput.bind(this);
    this.handleCreateTask = this.handleCreateTask.bind(this);
    this.handeSidebarToggle = this.handeSidebarToggle.bind(this);
    this.toggleTaskContainer = this.toggleTaskContainer.bind(this);
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
    const completedTaskContainer = this.completedTaskContainerRef.current;
    const taskContainer = this.taskContainerRef.current;
    const toggleContainerButton = this.toggleContainerButtonRef.current;

    completedTaskContainer.classList.toggle('completed-task-container_hidden');
    taskContainer.classList.toggle('task-container_hidden');
    toggleContainerButton.classList.toggle(
      'completed-task-container__arrow_down'
    );
    toggleContainerButton.classList.toggle(
      'completed-task-container__arrow_right'
    );
  }

  handeSidebarToggle(e) {
    this.props.onSidebarToggle();
  }

  render() {
    const currentCategory = this.props.currentCategory;
    const currentTasks = this.props.currentTasks;
    const completedTasks = this.props.completedTasks;
    return (
      <div className='main'>
        <div
          className='main__sidebar-icon icon'
          onClick={this.handeSidebarToggle}
          ref={this.props.forwardedSidebarIconRef}
        ></div>
        <div className='main__title'>
          <div
            className={`main__title-icon sidebar__cat-icon_${currentCategory.icon} icon `}
          ></div>
          <p className='main__title-text'>{currentCategory.name}</p>
          <div
            className='main__theme-switcher'
            onClick={this.props.onToggleTheme}
          ></div>
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

        <div
          className='completed-task-container'
          ref={this.completedTaskContainerRef}
        >
          <div
            className='completed-task-container__toggle'
            onClick={this.toggleTaskContainer}
          >
            <div
              className='completed-task-container__arrow completed-task-container__arrow_down icon'
              ref={this.toggleContainerButtonRef}
            ></div>
            <p className='completed-task-container__text'>
              Completed
              <span className='completed-task-container__tasks-number'>
                {completedTasks.length}
              </span>
            </p>
          </div>
          <TaskContainer
            forwardedRef={this.taskContainerRef}
            tasks={completedTasks}
            onDeleteTask={this.props.onDeleteTask}
            onToggleCompleteTask={this.props.onToggleCompleteTask}
            onToggleImportantTask={this.props.onToggleImportantTask}
            onUpdateTask={this.props.onUpdateTask}
            forwardedRef={this.taskContainerRef}
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
