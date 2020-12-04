import { v4 as uuidv4 } from 'uuid';
export default class Category {
  constructor(
    name,
    icon = '',
    selected = false,
    deletable = false,
    id = uuidv4()
  ) {
    this.name = name;
    this.icon = icon;
    this.selected = selected;
    this.deletable = deletable;
    this.id = id;
  }
}
