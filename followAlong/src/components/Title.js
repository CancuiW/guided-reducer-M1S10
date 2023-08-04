import React, { useState, useReducer } from 'react';
import reducer ,{initialState} from './../reducers/title.reducer';
import { setTitle, setNewTitleText, toggleEditing } from './../actions/title.action'


const Title = () => {
  //---------------------------way1:previous way to solve this problem(set 3 states )
  // const [title, setTitle] = useState('Hello earthlings!');
  // const [editing, setEditing] = useState(false);
  // const [newTitleText, setNewTitleText] = useState('');

  // const handleChanges = e => {
  //   setNewTitleText(e.target.value);
  // };

  // const handleEditing = () => {
  //   setEditing(!editing);
  // }

  // const handleFormSubmit = () => {
  //   setTitle(newTitleText);
  //   setEditing(false);
  // }

  //----------------------------way2:use userReducer Hook to solve this
  const [state,dispatch]=useReducer(reducer,initialState)
  // initialState = { title: 'Hello earthlings!', editing: false, newTitleText:""}
  
  const handleEditing = () => {
     dispatch(toggleEditing())
   }

  const handleChanges = e => {
    const text=e.target.value
    dispatch(setNewTitleText(text));
  };
  const handleFormSubmit = () => {
    dispatch(setTitle(state.newTitleText))
    
  }
                   

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{' '}
          <i onClick={handleEditing} className="far fa-edit" />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={state.newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={handleFormSubmit}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;