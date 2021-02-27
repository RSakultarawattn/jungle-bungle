import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createStory } from '../actions/choiceActions';
import { Link } from 'react-router-dom';
import JungleHerList from '../components/stories/JungleHerList';
import { useHistory } from 'react-router-dom';

//import JungleHer from '../components/stories/JungleHer';

// import { createNameChoice, createAnimalChoice, 
//   createToolChoice, createAdjectiveChoice } from '../actions/choiceActions';


const JungleChoiceForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [tool, setTool] = useState('');
  const [adjective, setAdjective] = useState('');
  const [animal, setAnimal] = useState('');
  const history = useHistory();


  const handleSubmit = event => {
    event.preventDefault();

    dispatch(createStory ({ name, tool, adjective, animal }));
    history.push('/JungleHerList');
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
      <button>Go read your story!</button>
      
    </form>
  );
};

export default JungleChoiceForm;
