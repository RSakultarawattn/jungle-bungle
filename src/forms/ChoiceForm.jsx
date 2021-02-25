import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createStory } from '../actions/choiceActions';

const ChoiceForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [tool, setTool] = useState('');
  const [adjective, setAdjective] = useState('');
  const [animal, setAnimal] = useState('');



  const handleSubmit = event => {
    event.preventDefault();

    dispatch(createStory({ name, tool, adjective, animal }));

  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="your name"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <input
        type="text"
        placeholder="enter the name of a tool"
        value={tool}
        onChange={({ target }) => setTool(target.value)}
      />
      <input
        type="text"
        placeholder="enter an adjective"
        value={adjective}
        onChange={({ target }) => setAdjective(target.value)}
      />
      <input
        type="text"
        placeholder="enter an animal"
        value={animal}
        onChange={({ target }) => setAnimal(target.value)}
      />
      <button>Pull the trigger!</button>
    </form>
  );
};

export default ChoiceForm;
