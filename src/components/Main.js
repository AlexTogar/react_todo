import React, { Component } from 'react';
import TaskContainer from './TaskContainer';
import CompletedTaskContainer from './CompletedTaskContainer';

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
    this.props.onCreateTask(
      this.state.createTaskInputValue,
      this.props.currentCategory.id
    );
    this.setState({
      createTaskInputValue: '',
    });
  }

  render() {
    const currentCategory = this.props.currentCategory;
    const currentTasks = this.props.currentTasks;
    const completedTasks = this.props.completedTasks;
    return (
      <div className='main'>
        <div className='main__title'>
          <div className='main__title-icon icon'></div>
          <p className='main__title-text'>{currentCategory.name}</p>
        </div>
        <TaskContainer
          category={currentCategory}
          tasks={currentTasks}
          onDeleteTask={this.props.onDeleteTask}
          onToggleCompleteTask={this.props.onToggleCompleteTask}
          onToggleImportantTask={this.props.onToggleImportantTask}
          onUpdateTask={this.props.onUpdateTask}
        />
        <CompletedTaskContainer
          tasks={completedTasks}
          onDeleteTask={this.props.onDeleteTask}
          onToggleCompleteTask={this.props.onToggleCompleteTask}
          onToggleImportantTask={this.props.onToggleImportantTask}
          onUpdateTask={this.props.onUpdateTask}
        />
        <div className='main__input input'>
          <div className='main__icon icon'></div>
          <form className='main__form' onSubmit={this.handleCreateTask}>
            <input
              type='text'
              className='input__field main__input-field'
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
