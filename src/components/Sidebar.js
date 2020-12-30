import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import constants from '../helper/constants';
import categoryActions from '../actions/categoryActions';
import taskActions from '../actions/taskActions';
const { ALL_TASKS_CAT_ID, IMPORTANT_CAT_ID } = constants;
const { createCategory, deleteCategory, selectCategory } = categoryActions;
const { deleteTask } = taskActions;

function Sidebar(props, sidebarRef) {
  const [input, setInput] = useState('');
  const categories = useSelector((state) => state.categories);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  function handleCreateCategory(e) {
    e.preventDefault();
    dispatch(createCategory(input));
    setInput('');
  }

  function handleSelectCategory(e) {
    const id = e.currentTarget.attributes.catid.value;
    dispatch(selectCategory(id));
    //hide sidebar after category selection on mobile version
    props.onSidebarToggle();
  }

  function handleDeleteCategory(e) {
    e.stopPropagation();
    const id = e.target.parentElement.attributes.catid.value;
    dispatch(deleteCategory(id));
    tasks.forEach((task) => {
      if (task.categoryId === id) dispatch(deleteTask(task.id));
    });
  }

  function handleInput(e) {
    setInput(e.target.value);
  }

  //create map [categoryId => numOfTasks] for each category
  const importantTasks = tasks.filter((task) => task.important);
  let tasksNumbers = Object.create(null);
  tasksNumbers = {
    [IMPORTANT_CAT_ID]: importantTasks.length,
    [ALL_TASKS_CAT_ID]: tasks.length,
  };
  categories.forEach((cat) => {
    if (![ALL_TASKS_CAT_ID, IMPORTANT_CAT_ID].includes(cat.id))
      tasksNumbers[cat.id] = tasks.filter(
        (task) => task.categoryId === cat.id
      ).length;
  });

  const categoryElements = categories.map((cat) => {
    return (
      <div
        className={`sidebar__category ${
          cat.selected ? 'sidebar__category_active' : ''
        }`}
        key={cat.id}
        onClick={handleSelectCategory}
        catid={cat.id}
      >
        <div
          className={`sidebar__cat-icon sidebar__cat-icon_${cat.icon} icon`}
        ></div>
        <p className='sidebar__cat-text'>{cat.name}</p>
        {cat.deletable ? (
          <div
            className='icon application__trash-icon'
            onClick={handleDeleteCategory}
          ></div>
        ) : null}
        <span className='sidebar__tasks-number'>{tasksNumbers[cat.id]}</span>
      </div>
    );
  });

  return (
    <div className='sidebar' ref={sidebarRef}>
      <div className='sidebar__title'>
        <div className='sidebar__title-text'>Category list</div>
      </div>
      <div className='sidebar__categories'>{categoryElements}</div>
      <div className='sidebar__input input'>
        <div className='sidebar__icon icon'></div>
        <form onSubmit={handleCreateCategory}>
          <input
            type='text'
            className='input-field'
            placeholder='New category'
            onChange={handleInput}
            value={input}
          />
        </form>
      </div>
    </div>
  );
}

export default React.forwardRef(Sidebar);
