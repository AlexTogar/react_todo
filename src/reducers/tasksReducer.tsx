import Tasks from '../Tasks.json';
import Task from '../helper/TaskClass';
const tasksReducer = (tasks = Tasks, action) => {
  const text = action.payload?.text;
  const id = action.payload?.id;
  const categoryId = action.payload?.categoryId;
  switch (action.type) {
    case 'CREATE_TASK':
      const newTask = new Task(text, categoryId);
      return tasks.concat(newTask);

    case 'DELETE_TASK':
      return tasks.filter((task) => id !== task.id);

    case 'TOGGLE_COMPLETE_TASK':
      return tasks.map((task) => {
        task.completed = task.id === id ? !task.completed : task.completed;
        return task;
      });

    case 'TOGGLE_IMPORTANT_TASK':
      return tasks.map((task) => {
        task.important = task.id === id ? !task.important : task.important;
        return task;
      });

    case 'UPDATE_TASK':
      return tasks.map((task) => {
        task.text = task.id === id ? text : task.text;
        return task;
      });

    default:
      return tasks;
  }
};

export default tasksReducer;
