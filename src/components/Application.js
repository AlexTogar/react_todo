import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import Tasks from '../Tasks.json';
import Categories from '../Categoies.json';
import { v4 as uuidv4 } from 'uuid';

const ALL_TASKS_CAT_ID = '1';
const IMPORTANT_CAT_ID = '2';
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
    this.important = this.categoryId === IMPORTANT_CAT_ID ? true : important;
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
   * @returns {Task}
   */
  createTask(text, categoryId) {
    const newTask = new Task(text, categoryId);
    this.setState((state) => {
      return { tasks: state.tasks.concat(newTask) };
    });
    return newTask;
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
  updateTask(id, text) {
    console.log(id, text);
    this.setState((state) => {
      return {
        tasks: state.tasks.map((task) => {
          task.text = task.id === id ? text : task.text;
          return task;
        }),
      };
    });
  }

  /**
   *
   * @param {string} name
   * @returns {Category}
   */
  createCategory(name) {
    const newCat = new Category(name, 'default', false, true);
    this.setState((state) => {
      return {
        categories: state.categories.concat(newCat),
      };
    });
    return newCat;
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
        tasks: state.tasks.filter((task) => task.categoryId !== id),
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
    const allTasks = this.state.tasks.filter(
      (task) => task.completed === false
    );
    const importantTasks = allTasks.filter((task) => task.important);
    const completedTasks = this.state.tasks.filter((task) => task.completed);

    let currentTasks;

    if (currentCategory.id === IMPORTANT_CAT_ID) {
      currentTasks = importantTasks;
    } else if (currentCategory.id === ALL_TASKS_CAT_ID) {
      currentTasks = allTasks;
    } else {
      currentTasks = allTasks.filter(
        (task) => task.categoryId === currentCategory.id
      );
    }

    const tasksNumbers = {
      [IMPORTANT_CAT_ID]: importantTasks.length,
      [ALL_TASKS_CAT_ID]: allTasks.length,
    };

    this.state.categories.forEach((cat) => {
      if (![ALL_TASKS_CAT_ID, IMPORTANT_CAT_ID].includes(cat.id))
        tasksNumbers[cat.id] = allTasks.filter(
          (task) => task.categoryId === cat.id
        ).length;
    });

    return (
      <>
        <Sidebar
          tasksNumbers={tasksNumbers}
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
