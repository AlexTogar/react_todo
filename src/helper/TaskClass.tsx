import { v4 as uuidv4 } from 'uuid';
import constants from './constants';
const { IMPORTANT_CAT_ID } = constants;

export default class Task {
  constructor(
    text = '',
    categoryId,
    completed = false,
    important = false,
    id = uuidv4()
  ) {
    this.text = text;
    this.categoryId = categoryId;
    this.completed = completed;
    this.important = this.categoryId === IMPORTANT_CAT_ID ? true : important;
    this.id = id;
  }
}
