import React, { useState } from 'react';

/* 
Contains categories list
input field for creating new category
*/
export default function Sidebar(props) {
  const [input, setInput] = useState('');

  function handleCreateCategory(e) {
    e.preventDefault();
    const newCat = props.onCreateCategory(state.createCategoryInputValue);
    setInput('');
    props.onSelectCategory(newCat.id);
  }

  function handleSelectCategory(e) {
    const id = e.currentTarget.attributes.catid.value;
    props.onSelectCategory(id);
    props.onSidebarToggle();
  }

  function handleDeleteCategory(e) {
    e.stopPropagation();
    const id = e.target.parentElement.attributes.catid.value;
    props.onDeleteCategory(id);
  }

  function handleInput(e) {
    setInput(e.target.value);
  }

  const categories = props.categories.map((cat) => {
    return (
      <div
        className={`sidebar__category ${
          cat.selected ? 'sidebar__category_active' : ''
        }`}
        key={cat.id}
        onClick={handleSelectCategory}
        catid={cat.id}
      >
        <div
          className={`sidebar__cat-icon sidebar__cat-icon_${cat.icon} icon`}
        ></div>
        <p className='sidebar__cat-text'>{cat.name}</p>
        {cat.deletable ? (
          <div
            className='icon application__trash-icon'
            onClick={handleDeleteCategory}
          ></div>
        ) : null}
        <span className='sidebar__tasks-number'>
          {props.tasksNumbers[cat.id]}
        </span>
      </div>
    );
  });

  return (
    <div className='sidebar' ref={props.forwardedSidebarRef}>
      <div className='sidebar__title'>
        <div className='sidebar__title-text'>Category list</div>
      </div>
      <div className='sidebar__categories'>{categories}</div>
      <div className='sidebar__input input'>
        <div className='sidebar__icon icon'></div>
        <form onSubmit={handleCreateCategory}>
          <input
            type='text'
            className='input-field'
            placeholder='New category'
            onChange={handleInput}
            value={input}
          />
        </form>
      </div>
    </div>
  );
}
