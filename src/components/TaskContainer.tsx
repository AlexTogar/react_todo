import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import taskActions from '../actions/taskActions';
const {
  deleteTask,
  toggleCompleteTask,
  toggleImportantTask,
  updateTask,
} = taskActions;

function TaskContainer(props, taskContainerRef) {
  const dispatch = useDispatch();

  function handleDeleteTask(e) {
    const id = e.target.parentElement.attributes.taskid.value;
    dispatch(deleteTask(id));
  }

  function handleToggleCompleteTask(e) {
    const taskElement = e.currentTarget.parentElement;
    taskElement.classList.toggle('task-container__task_checked');
    setTimeout(() => {
      const id = taskElement.attributes.taskid.value;
      dispatch(toggleCompleteTask(id));
    }, 150);
  }

  function handleToggleImportantTask(e) {
    const id = e.target.parentElement.attributes.taskid.value;
    dispatch(toggleImportantTask(id));
  }

  function enableTaskInput(e) {
    e.target.disabled = false;
  }

  function disableTaskInput(e) {
    e.target.disabled = true;
  }

  function handleInput(e) {
    const id = e.currentTarget.attributes.taskid.value;
    const text = e.target.value;
    dispatch(updateTask(id, text));
  }

  const taskElements = props.tasks.map((task) => {
    return (
      <div
        className={`task-container__task ${
          task.completed ? 'task-container__task_checked' : ''
        }`}
        key={task.id}
        taskid={task.id}
        onPointerDown={enableTaskInput}
        onBlur={disableTaskInput}
        onChange={handleInput}
      >
        <div
          className='task-container__pseudo-checkbox'
          onPointerDown={handleToggleCompleteTask}
        ></div>
        <input type='checkbox' className='task-container__task-checkbox' />
        <input
          style={
            task.completed
              ? {
                  color: '#939393',
                  textDecoration: 'line-through',
                }
              : {}
          }
          className='task-container__task-text'
          value={task.text}
          type='text'
          disabled
        />

        <div
          className='icon application__trash-icon'
          onPointerDown={handleDeleteTask}
        ></div>

        <div
          className={`task-container__task-star ${
            task.important ? 'task-container__task-star_acitve' : ''
          } icon`}
          onPointerDown={handleToggleImportantTask}
        ></div>
      </div>
    );
  });

  return (
    <div className='task-container' ref={taskContainerRef}>
      {taskElements}
    </div>
  );
}

export default React.forwardRef(TaskContainer);
