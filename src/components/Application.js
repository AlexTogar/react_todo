import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import Tasks from '../Tasks.json';
import Categories from '../Categoies.json';
import { v4 as uuidv4 } from 'uuid';

const ALL_TASKS_CAT_ID = '1';
const BLUE = '#788CDE';

class Task {
  constructor(
    text = '',
    categoryId,
    completed = false,
    important = false,
    id = uuidv4()
  ) {
    this.text = text;
    this.categoryId = categoryId;
    this.completed = completed;
    this.important = important;
    this.id = id;
  }
}

class Category {
  constructor(
    name,
    icon = '',
    selected = false,
    deletable = false,
    textColor = BLUE,
    numOfTasks = 0,
    id = uuidv4()
  ) {
    this.name = name;
    this.icon = icon;
    this.selected = selected;
    this.deletable = deletable;
    this.textColor = textColor;
    this.numOfTasks = numOfTasks;
    this.id = id;
  }
}

export default class Application extends Component {
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
    this.toggleCompleteTask = this.toggleCompleteTask.bind(this);
    this.toggleImportantTask = this.toggleImportantTask.bind(this);
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
  toggleCompleteTask(id) {
    this.setState((state) => {
      const task = state.tasks.find((task) => task.id === id);
      task.completed = !task.completed;
      return state;
    });
  }

  /**
   *
   * @param {string} id
   * @returns {void}
   */
  toggleImportantTask(id) {
    this.setState((state) => {
      console.log(id, state.tasks);
      const task = state.tasks.find((task) => task.id === id);
      task.important = !task.important;
      return state;
    });
  }

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
      return {
        categories: state.categories.concat(
          new Category(name, 'default', false, true)
        ),
      };
    });
  }

  /**
   *
   * @param {string} id
   * @returns {void}
   */
  deleteCategory(id) {
    const category = this.state.categories.find((cat) => cat.id === id);
    if (category.selected) {
      this.setState((state) => {
        return {
          categories: state.categories.map((cat) => {
            if (cat.id === ALL_TASKS_CAT_ID) {
              cat.selected = true;
              return cat;
            }
            return cat;
          }),
        };
      });
    }

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
      <>
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
          onToggleCompleteTask={this.toggleCompleteTask}
          onToggleImportantTask={this.toggleImportantTask}
          onUpdateTask={this.updateTask}
        />
      </>
    );
  }
}
