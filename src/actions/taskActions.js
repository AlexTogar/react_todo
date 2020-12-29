export default {
  createTask: (text, categoryId) => {
    return {
      type: 'CREATE_TASK',
      payload: {
        text,
        categoryId,
      },
    };
  },
  deleteTask: (id) => {
    return {
      type: 'DELETE_TASK',
      payload: {
        id,
      },
    };
  },
  toggleCompleteTask: (id) => {
    return {
      type: 'TOGGLE_COMPLETE_TASK',
      payload: {
        id,
      },
    };
  },
  toggleImportantTask: (id) => {
    return {
      type: 'TOGGLE_IMPORTANT_TASK',
      payload: {
        id,
      },
    };
  },
  updateTask: (id, text) => {
    return {
      type: 'UPDATE_TASK',
      payload: {
        id,
        text,
      },
    };
  },
};
