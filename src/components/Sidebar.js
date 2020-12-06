import React, { Component } from 'react';

/* 
Contains categories list
input field for creating new category
*/
export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createCategoryInputValue: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleCreateCategory = this.handleCreateCategory.bind(this);
    this.handleSelectCategory = this.handleSelectCategory.bind(this);
    this.handleDeleteCategory = this.handleDeleteCategory.bind(this);
  }

  handleCreateCategory(e) {
    e.preventDefault();
    const newCat = this.props.onCreateCategory(
      this.state.createCategoryInputValue
    );
    this.setState({ createCategoryInputValue: '' });
    this.props.onSelectCategory(newCat.id);
  }

  handleSelectCategory(e) {
    const id = e.currentTarget.attributes.catid.value;
    this.props.onSelectCategory(id);
    this.props.onSidebarToggle();
  }

  handleDeleteCategory(e) {
    e.stopPropagation();
    const id = e.target.parentElement.attributes.catid.value;
    this.props.onDeleteCategory(id);
  }

  handleInput(e) {
    this.setState({ createCategoryInputValue: e.target.value });
  }

  render() {
    const categories = this.props.categories.map((cat) => {
      return (
        <div
          className={`sidebar__category ${
            cat.selected ? 'sidebar__category_active' : ''
          }`}
          key={cat.id}
          onClick={this.handleSelectCategory}
          catid={cat.id}
        >
          <div
            className={`sidebar__cat-icon sidebar__cat-icon_${cat.icon} icon`}
          ></div>
          <p className='sidebar__cat-text'>{cat.name}</p>
          {cat.deletable ? (
            <div
              className='icon application__trash-icon'
              onClick={this.handleDeleteCategory}
            ></div>
          ) : null}
          <span className='sidebar__tasks-number'>
            {this.props.tasksNumbers[cat.id]}
          </span>
        </div>
      );
    });

    return (
      <div className='sidebar'>
        <div className='sidebar__title'>
          <div className='sidebar__title-text'>Category list</div>
        </div>
        <div className='sidebar__categories'>{categories}</div>
        <div className='sidebar__input input'>
          <div className='sidebar__icon icon'></div>
          <form onSubmit={this.handleCreateCategory}>
            <input
              type='text'
              className='input-field'
              placeholder='New category'
              onChange={this.handleInput}
              value={this.state.createCategoryInputValue}
            />
          </form>
        </div>
      </div>
    );
  }
}
