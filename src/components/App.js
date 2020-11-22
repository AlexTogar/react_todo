import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import Tasks from '../Tasks.json';
import Categories from '../Categoies.json';
import '../styles/App.css';

export default class App extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      Tasks: Tasks,
      categories: Categories,
    };

    this.deleteTask = this.deleteTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.markAsImportantTask = this.markAsImportantTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.createCategory = this.createCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
  }

  createTask(text, categoryId) {}

  deleteTask(id) {}

  completeTask(id) {}

  markAsImportantTask(id) {}

  updateTask(id, text) {}

  createCategory(name) {}

  deleteCategory(categoryId) {}

  render() {
    return (
      <div class='App'>
        <Sidebar
          onCreateCategory={this.createCategory}
          onDeleteCategory={this.deleteCategory}
        />
        <Main
          onCreateTask={this.createTask}
          onDeleteTask={this.deleteTask}
          onCompleteTask={this.completeTask}
          onMarkAsImportantTask={this.markAsImportantTask}
          onUpdateTask={this.updateTask}
        />
      </div>
    );
  }
}
