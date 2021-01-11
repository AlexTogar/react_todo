import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import constants from '../helper/constants';
import categoryActions from '../actions/categoryActions';
import taskActions from '../actions/taskActions';
const { ALL_TASKS_CAT_ID, IMPORTANT_CAT_ID } = constants;
const { createCategory, deleteCategory, selectCategory } = categoryActions;
const { deleteTask } = taskActions;

export default React.forwardRef(
  ({ onSidebarToggle }: any, ref: React.ForwardedRef<HTMLDivElement>) => {
    const [input, setInput] = useState('');
    const categories = useSelector((state: Store) => state.categories);
    const tasks = useSelector((state: Store) => state.tasks);
    const dispatch = useDispatch();

    function handleCreateCategory(e: React.FormEvent<HTMLFormElement>): void {
      e.preventDefault();
      if (input) dispatch(createCategory(input));
      setInput('');
    }

    function handleSelectCategory(e: React.PointerEvent<HTMLDivElement>): void {
      // @ts-ignore
      const id = e.currentTarget.attributes['data-catid'].value;
      dispatch(selectCategory(id));
      //hide sidebar after category selection on mobile version
      onSidebarToggle();
    }

    function handleDeleteCategory(e: React.PointerEvent<HTMLDivElement>): void {
      e.stopPropagation();
      // @ts-ignore
      const id = e.target.parentElement.attributes['data-catid'].value;
      dispatch(deleteCategory(id));
      tasks.forEach((task) => {
        if (task.categoryId === id) dispatch(deleteTask(task.id));
      });
    }

    function handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
      setInput(e.target.value);
    }

    //create map [categoryId => numOfTasks] for each category
    const activeTasks = tasks.filter((task) => task.completed === false);
    const importantTasks = activeTasks.filter((task) => task.important);
    let tasksNumbers = Object.create(null);
    tasksNumbers = {
      [IMPORTANT_CAT_ID]: importantTasks.length,
      [ALL_TASKS_CAT_ID]: activeTasks.length,
    };
    categories.forEach((cat) => {
      if (![ALL_TASKS_CAT_ID, IMPORTANT_CAT_ID].includes(cat.id))
        tasksNumbers[cat.id] = activeTasks.filter(
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
          onPointerDown={handleSelectCategory}
          data-catid={cat.id}
        >
          <div
            className={`sidebar__cat-icon sidebar__cat-icon_${cat.icon} icon`}
          ></div>
          <p className='sidebar__cat-text'>{cat.name}</p>
          {cat.deletable ? (
            <div
              className='icon app__trash-icon'
              onPointerDown={handleDeleteCategory}
            ></div>
          ) : null}
          <span className='sidebar__tasks-number'>{tasksNumbers[cat.id]}</span>
        </div>
      );
    });

    return (
      <div className='sidebar' ref={ref}>
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
);
