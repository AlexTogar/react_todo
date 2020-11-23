import React, { Component } from 'react';
import TaskContainer from './TasksContainer';
import CompletedTasksContainer from './CompletedTasksContainer';
import '../styles/Main.css';

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
      <div className='Main'>
        <h1 className='Main__header'>{currentCategory.name}</h1>
        <TaskContainer
          tasks={currentTasks}
          onDeleteTask={this.props.onDeleteTask}
          onCompleteTask={this.props.onCompleteTask}
          onMarkAsImportantTask={this.props.onMarkAsImportantTask}
          onUpdateTask={this.props.onUpdateTask}
        />
        <CompletedTasksContainer completedTasks={completedTasks} />

        <form onSubmit={this.handleCreateTask}>
          <input
            type='text'
            placeholder='add new task'
            onChange={this.handleInput}
            value={this.state.createTaskInputValue}
          />
          <input type='submit' value='add' />
        </form>
      </div>
    );
  }
}
