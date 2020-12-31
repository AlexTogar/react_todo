import Category from '../helper/CategoryClass';
import constants from '../helper/constants';
import Categories from '../Categoies.json';
const { ALL_TASKS_CAT_ID } = constants;

const categoriesReducer = (categories = Categories, action) => {
  const id = action.payload?.id;
  const name = action.payload?.name;
  switch (action.type) {
    case 'CREATE_CATEGORY':
      const newCat = new Category(name, 'default', false, true);
      return categories.concat(newCat);

    case 'DELETE_CATEGORY':
      const catToDelete = categories.find((cat) => cat.id === id);
      let newCategories = categories;
      if (catToDelete.selected) {
        newCategories = categories.map((cat) => {
          if (cat.id === ALL_TASKS_CAT_ID) {
            cat.selected = true;
            return cat;
          }
          return cat;
        });
      }

      return newCategories.filter((cat) => cat.id !== id);

    // setTasks((prevTasks) => {
    //   return prevTasks.filter((task) => task.categoriyId !== id);
    // });
    case 'SELECT_CATEGORY':
      return categories.map((cat) => {
        cat.selected = cat.id === id ? true : false;
        return cat;
      });
    default:
      return categories;
  }
};

export default categoriesReducer;
