import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import Category from '../helper/CategoryClass';
import constants from '../helper/constants';
import Style from './Style';
import MediaStyle from './MediaStyle';
import { useSelector } from 'react-redux';
import { useState } from 'react';

//initial categories
import Categories from '../Categoies.json';

const { ALL_TASKS_CAT_ID, IMPORTANT_CAT_ID } = constants;

export default function Application(props) {
  const [categories, setCategories] = useState(Categories);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  const tasks = useSelector((state) => state);
  const sidebarRef = React.createRef();
  const sidebarIconRef = React.createRef();

  /**
   *
   * @param {string} name
   * @returns {Category}
   */
  function createCategory(name) {
    const newCat = new Category(name, 'default', false, true);
    setCategories((prevCategories) => {
      return prevCategories.concat(newCat);
    });
    return newCat;
  }

  /**
   *
   * @param {string} id
   * @returns {void}
   */
  function deleteCategory(id) {
    const category = categories.find((cat) => cat.id === id);
    if (category.selected) {
      setCategories((prevCategories) => {
        return prevCategories.map((cat) => {
          if (cat.id === ALL_TASKS_CAT_ID) {
            cat.selected = true;
            return cat;
          }
          return cat;
        });
      });
    }

    setCategories((prevCategories) => {
      return prevCategories.filter((cat) => cat.id !== id);
    });

    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.categoriyId !== id);
    });
  }

  function selectCategory(id) {
    setCategories((prevCategories) => {
      return prevCategories.map((cat) => {
        cat.selected = cat.id === id ? true : false;
        return cat;
      });
    });
  }

  function sidebarToggle() {
    const sidebar = this.sidebarRef.current;
    const sidebarIcon = this.sidebarIconRef.current;
    sidebar.classList.toggle('sidebar_shown');
    sidebarIcon.classList.toggle('main__sidebar-icon_closing');
  }

  function toggleTheme() {
    let currentTheme;
    setTheme((prevTheme) => {
      currentTheme = prevTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', currentTheme);
      return currentTheme;
    });
  }

  const currentCategory = categories.find((cat) => cat.selected);
  const allTasks = tasks.filter((task) => task.completed === false);
  const importantTasks = allTasks.filter((task) => task.important);
  const completedTasks = tasks.filter((task) => task.completed);

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

  //create map categoryId => number of tasks in category
  let tasksNumbers = Object.create(null);
  tasksNumbers = {
    [IMPORTANT_CAT_ID]: importantTasks.length,
    [ALL_TASKS_CAT_ID]: allTasks.length,
  };
  categories.forEach((cat) => {
    if (![ALL_TASKS_CAT_ID, IMPORTANT_CAT_ID].includes(cat.id))
      tasksNumbers[cat.id] = allTasks.filter(
        (task) => task.categoryId === cat.id
      ).length;
  });

  return (
    <>
      <Style theme={theme} />
      <MediaStyle />
      <Sidebar
        tasksNumbers={tasksNumbers}
        categories={categories}
        onCreateCategory={createCategory}
        onDeleteCategory={deleteCategory}
        onSelectCategory={selectCategory}
        onSidebarToggle={sidebarToggle}
        forwardedSidebarRef={sidebarRef}
      />
      <Main
        currentCategory={currentCategory}
        currentTasks={currentTasks}
        completedTasks={completedTasks}
        onSidebarToggle={sidebarToggle}
        forwardedSidebarIconRef={sidebarIconRef}
        onToggleTheme={toggleTheme}
      />
    </>
  );
}
