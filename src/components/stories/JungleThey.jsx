import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ChoiceForm from '../../forms/ChoiceForm';
import { createStory } from '../../actions/choiceActions';

const JungleThey = ({ name, tool, adjective, animal }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ createStory });
  
  };
  return (
  
    <figure>
      <dt>THE JUNGLE BUNGLE</dt>
      {name} woke to find themselves 
      in a close, {adjective}, warm environment.  
     The many sounds surrounding them somehow seemed familiar, though 
    from where they could not recall.  They lay there for some time with
     their eyes closed in an attempt to mentally orient themselves to their new 
     surroundings.	When at last they opened their eyes, they saw green leaves
      framing a thin strip of blue sky.  They rose to a sitting position 
      from where they lay on the ground and took in the surrounding foliage.
        They soon realized they were in a jungle. How they could have to come 
        be there they 
    had no idea, but intuition suggested the need to get 
    out of the jungle as soon as possible.
    They arose from the forest floor and did a complete turn  
    in an attempt to orient themselves, and choose a 
    direction of travel. {name} soon saw that thickness of the
     vegetation was going to make travel difficult
    and wished they had a tool of some kind to assist them.
      They gasped when they saw 
    a {tool} leaning against a nearby tree, but was even more 
    astonished when they noticed it was being
    guarded by a large {animal}!

      <button onClick={handleClick}>Go!</button>
      <ChoiceForm/>

    </figure>
  );
};
JungleThey.propTypes = {
  name: PropTypes.string.isRequired,
  tool: PropTypes.string.isRequired,
  adjective: PropTypes.string.isRequired,
  animal: PropTypes.string.isRequired
  
};

export default JungleThey;
