export default {
  createCategory: (name) => {
    return {
      type: 'CREATE_CATEGORY',
      payload: {
        name,
      },
    };
  },
  deleteCategory: (id) => {
    return {
      type: 'DELETE_CATEGORY',
      payload: { id },
    };
  },
  selectCategory: (id) => {
    return {
      type: 'SELECT_CATEGORY',
      payload: { id },
    };
  },
};
