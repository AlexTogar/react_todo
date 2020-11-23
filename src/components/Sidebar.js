import React, { Component } from 'react';
import '../styles/Sidebar.css';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createCategoryInputValue: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleCreateCategory = this.handleCreateCategory.bind(this);
  }

  handleCreateCategory(e) {
    e.preventDefault();
    this.props.onCreateCategory(this.state.createCategoryInputValue);
    this.setState({ createCategoryInputValue: '' });
  }

  handleInput(event) {
    this.setState({ createCategoryInputValue: event.target.value });
  }

  render() {
    let categories = this.props.categories;
    categories = categories.map((cat) => {
      return (
        <li
          key={cat.id}
          style={cat.selected ? { color: 'red' } : { color: 'black' }}
          onClick={() => {
            this.props.onSelectCategory(cat.id);
          }}
        >
          {cat.name}----{cat.numOfTasks}
          <button
            className='delete-button'
            onClick={() => {
              this.props.onDeleteCategory(cat.id);
            }}
          >
            X
          </button>
        </li>
      );
    });
    return (
      <div className='Sidebar'>
        <ul>{categories}</ul>
        <form onSubmit={this.handleCreateCategory}>
          <input
            type='text'
            onChange={this.handleInput}
            value={this.state.createCategoryInputValue}
          />
          <input type='submit' value='add' />
        </form>
      </div>
    );
  }
}
