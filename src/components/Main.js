import React, { useState } from 'react';
import TaskContainer from './TaskContainer';
import { useDispatch } from 'react-redux';
import taskActions from '../actions/taskActions';
const { createTask } = taskActions;
/* 
Contains active tasks list, completed tasks,
input field for creating new tasks
*/
export default function Main(props) {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const toggleContainerButtonRef = React.createRef();
  const taskContainerRef = React.createRef();
  const completedTaskContainerRef = React.createRef();

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleCreateTask(e) {
    e.preventDefault();
    if (input) {
      dispatch(createTask(input, props.currentCategory.id));
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

  const currentCategory = props.currentCategory;
  const currentTasks = props.currentTasks;
  const completedTasks = props.completedTasks;

  return (
    <div className='main'>
      <div
        className='main__sidebar-icon icon'
        onClick={handeSidebarToggle}
        ref={props.forwardedSidebarIconRef}
      ></div>
      <div className='main__title'>
        <div
          className={`main__title-icon sidebar__cat-icon_${currentCategory.icon} icon `}
        ></div>
        <p className='main__title-text'>{currentCategory.name}</p>
        <div
          className='main__theme-switcher'
          onClick={props.onToggleTheme}
        ></div>
      </div>
      <div className='active-task-container'>
        <TaskContainer category={currentCategory} tasks={currentTasks} />
      </div>

      <div className='completed-task-container' ref={completedTaskContainerRef}>
        <div
          className='completed-task-container__toggle'
          onClick={toggleTaskContainer}
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
        <TaskContainer forwardedRef={taskContainerRef} tasks={completedTasks} />
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
          />
        </form>
      </div>
    </div>
  );
}
