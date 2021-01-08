export default {
  createTask: (text: string, categoryId: string) => {
    return {
      type: 'CREATE_TASK',
      payload: {
        text,
        categoryId,
      },
    };
  },
  deleteTask: (id: string) => {
    return {
      type: 'DELETE_TASK',
      payload: {
        id,
      },
    };
  },
  toggleCompleteTask: (id: string) => {
    return {
      type: 'TOGGLE_COMPLETE_TASK',
      payload: {
        id,
      },
    };
  },
  toggleImportantTask: (id: string) => {
    return {
      type: 'TOGGLE_IMPORTANT_TASK',
      payload: {
        id,
      },
    };
  },
  updateTask: (id: string, text: string) => {
    return {
      type: 'UPDATE_TASK',
      payload: {
        id,
        text,
      },
    };
  },
};
