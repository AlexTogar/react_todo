import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import Tasks from '../Tasks.json';
import Categories from '../Categoies.json';
import '../styles/App.css';
import { v4 as uuidv4 } from 'uuid';

class Task {
  constructor(text = '', categoryId) {
    this.id = uuidv4();
    this.text = text;
    this.important = false;
    this.completed = false;
    this.categoryId = categoryId;
  }
}

class Category {
  constructor(name, icon = '') {
    this.id = uuidv4();
    this.name = name;
    this.deletable = false;
    this.textColor = '#788CDE';
    this.numOfTasks = 0;
    this.icon = icon;
    this.selected = false;
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /**@type {Task[]} */
      tasks: Tasks,
      /**@type {Category[]} */
      categories: Categories,
    };

    this.createTask = this.createTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.markAsImportantTask = this.markAsImportantTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.createCategory = this.createCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
  }
  /**
   *
   * @param {string} text
   * @param {string} categoryI
   * @returns {void}
   */
  createTask(text, categoryId) {
    this.setState((state) => {
      return { tasks: state.tasks.concat(new Task(text, categoryId)) };
    });
  }

  /**
   *
   * @param {string} id
   * @returns {void}
   */
  deleteTask(id) {
    this.setState((state) => {
      return { tasks: state.tasks.filter((task) => task.id !== id) };
    });
  }

  /**
   *
   * @param {string} id
   * @returns {void}
   */
  completeTask(id) {}

  /**
   *
   * @param {string} id
   * @returns {void}
   */
  markAsImportantTask(id) {}

  /**
   *
   * @param {string} id
   * @param {string} text
   * @returns {void}
   */
  updateTask(id, text) {}

  /**
   *
   * @param {string} name
   */
  createCategory(name) {
    this.setState((state) => {
      return { categories: state.categories.concat(new Category(name)) };
    });
  }

  /**
   *
   * @param {string} id
   * @returns {void}
   */
  deleteCategory(id) {
    this.setState((state) => {
      return {
        categories: state.categories.filter((cat) => cat.id !== id),
      };
    });
  }

  selectCategory(id) {
    this.setState((state) => {
      return {
        categories: state.categories.map((cat) => {
          cat.selected = cat.id === id ? true : false;
          return cat;
        }),
      };
    });
  }

  render() {
    const currentCategory = this.state.categories.find((cat) => cat.selected);
    const currentTasks = this.state.tasks.filter(
      (task) =>
        task.categoryId === currentCategory.id && task.completed === false
    );
    const completedTasks = this.state.tasks.filter(
      (task) => task.completed === true
    );
    return (
      <div className='App'>
        <Sidebar
          categories={this.state.categories}
          onCreateCategory={this.createCategory}
          onDeleteCategory={this.deleteCategory}
          onSelectCategory={this.selectCategory}
        />
        <Main
          currentCategory={currentCategory}
          currentTasks={currentTasks}
          completedTasks={completedTasks}
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
