export default {
  createCategory: (name: string) => {
    return {
      type: 'CREATE_CATEGORY',
      payload: {
        name,
      },
    };
  },
  deleteCategory: (id: string) => {
    return {
      type: 'DELETE_CATEGORY',
      payload: { id },
    };
  },
  selectCategory: (id: string) => {
    return {
      type: 'SELECT_CATEGORY',
      payload: { id },
    };
  },
};
