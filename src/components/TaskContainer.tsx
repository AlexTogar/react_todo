import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import taskActions from '../actions/taskActions';
const {
  deleteTask,
  toggleCompleteTask,
  toggleImportantTask,
  updateTask,
} = taskActions;

function TaskContainer(
  props: { tasks?: Task[]; category?: Category },
  taskContainerRef: React.RefObject<HTMLDivElement>
) {
  const dispatch = useDispatch();

  function handleDeleteTask(e: React.PointerEvent<HTMLDivElement>): void {
    // @ts-ignore
    const id = e.target.parentElement.attributes['data-taskid'].value;
    dispatch(deleteTask(id));
  }

  function handleToggleCompleteTask(
    e: React.PointerEvent<HTMLDivElement>
  ): void {
    const taskElement = e.currentTarget.parentElement;
    taskElement?.classList.toggle('task-container__task_checked');
    setTimeout(() => {
      // @ts-ignore
      const id = taskElement?.attributes['data-taskid'].value;
      dispatch(toggleCompleteTask(id));
    }, 150);
  }

  function handleToggleImportantTask(
    e: React.PointerEvent<HTMLDivElement>
  ): void {
    // @ts-ignore
    const id = e.target.parentElement.attributes['data-taskid'].value;
    dispatch(toggleImportantTask(id));
  }

  function enableTaskInput(e: React.FocusEvent<HTMLInputElement>): void {
    e.target.disabled = false;
  }

  function disableTaskInput(e: React.FocusEvent<HTMLInputElement>): void {
    e.target.disabled = true;
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
    // @ts-ignore
    const id = e.currentTarget.attributes['data-taskid'].value;
    const text = e.target.value;
    dispatch(updateTask(id, text));
  }

  const taskElements = props.tasks?.map((task, index) => {
    return (
      <div
        className={`task-container__task ${
          task.completed ? 'task-container__task_checked' : ''
        }`}
        key={task.id}
        data-taskid={task.id}
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
          onFocus={enableTaskInput}
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

// @ts-ignore
export default React.forwardRef(TaskContainer);
