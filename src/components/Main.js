import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskContainer from './TaskContainer';
import taskActions from '../actions/taskActions';
import constants from '../helper/constants';
const { createTask } = taskActions;
const { ALL_TASKS_CAT_ID, IMPORTANT_CAT_ID } = constants;

function Main(props, sidebarIconRef) {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const tasks = useSelector((state) => state.tasks);

  const toggleContainerButtonRef = useRef();
  const taskContainerRef = useRef();
  const completedTaskContainerRef = useRef();
  const inputRef = useRef(null);

  const currentCategory = categories.find((cat) => cat.selected);
  const activeTasks = tasks.filter((task) => task.completed === false);
  const importantTasks = activeTasks.filter((task) => task.important);
  const completedTasks = tasks.filter((task) => task.completed);

  let currentTasks;

  if (currentCategory.id === IMPORTANT_CAT_ID) {
    currentTasks = importantTasks;
  } else if (currentCategory.id === ALL_TASKS_CAT_ID) {
    currentTasks = activeTasks;
  } else {
    currentTasks = activeTasks.filter(
      (task) => task.categoryId === currentCategory.id
    );
  }

  //set focus on input
  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleCreateTask(e) {
    e.preventDefault();
    if (input) {
      dispatch(createTask(input, currentCategory.id));
      setInput('');
    }
  }

  function toggleTaskContainer() {
    const completedTaskContainer = completedTaskContainerRef.current;
    const taskContainer = taskContainerRef.current;
    const toggleContainerButton = toggleContainerButtonRef.current;

    completedTaskContainer.classList.toggle('completed-task-container_hidden');
    taskContainer.classList.toggle('task-container_hidden');
    toggleContainerButton.classList.toggle(
      'completed-task-container__arrow_down'
    );
    toggleContainerButton.classList.toggle(
      'completed-task-container__arrow_right'
    );
  }

  function handeSidebarToggle() {
    props.onSidebarToggle();
  }

  return (
    <div className='main'>
      <div
        className='main__sidebar-icon icon'
        onPointerDown={handeSidebarToggle}
        ref={sidebarIconRef}
      ></div>
      <div className='main__title'>
        <div
          className={`main__title-icon sidebar__cat-icon_${currentCategory.icon} icon `}
        ></div>
        <p className='main__title-text'>{currentCategory.name}</p>
        <div
          className='main__theme-switcher'
          onPointerDown={props.onToggleTheme}
        ></div>
      </div>
      <div className='active-task-container'>
        <TaskContainer category={currentCategory} tasks={currentTasks} />
      </div>

      <div className='completed-task-container' ref={completedTaskContainerRef}>
        <div
          className='completed-task-container__toggle'
          onPointerDown={toggleTaskContainer}
        >
          <div
            className='completed-task-container__arrow completed-task-container__arrow_down icon'
            ref={toggleContainerButtonRef}
          ></div>
          <p className='completed-task-container__text'>
            Completed
            <span className='completed-task-container__tasks-number'>
              {completedTasks.length}
            </span>
          </p>
        </div>
        <TaskContainer ref={taskContainerRef} tasks={completedTasks} />
      </div>
      <div className='main__input input'>
        <div className='main__icon icon'></div>
        <form className='main__form' onSubmit={handleCreateTask}>
          <input
            type='text'
            className='input-field main__input-field'
            placeholder='Add a task'
            value={input}
            onChange={handleInput}
            ref={inputRef}
          />
        </form>
      </div>
    </div>
  );
}

export default React.forwardRef(Main);
