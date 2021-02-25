import React from 'react';
import PropTypes from 'prop-types';
import ChoiceForm from '../../forms/ChoiceForm';

const JungleHer = ({ name, tool, adjective, animal, image }) => (
  <dl>
    <img src={image} />
    <dt>The Jungle Bungle</dt>
    {name} woke to find herself in a close, {adjective}, warm environment.  
     The many sounds surrounding her somehow seemed familiar, though 
    from where she could not recall.  She lied there for some time with
     her eyes closed in an attempt to mentally orient herself to her new 
     surroundings.	When at last she opened her eyes, she saw green leaves
      framing a thin strip of blue sky.  She rose to a sitting position 
      from where she lied on the ground and took in the surrounding foliage.
        She soon realized she was in a jungle. How she could have to come 
        be there she 
    had no idea, but intuition suggested the need to get 
    out of the jungle as soon as possible.
    She arose from the forest floor and did a complete turn 
    in an attempt to orient herself, and choose a 
    direction of travel. {name} soon saw that thickness of the
     vegetation was going to make travel difficult
    and wished she had a tool of some kind to assist her.
      She gasped when she saw 
    a {tool} leaning against a nearby tree, but was even more 
    astonished when she noticed it was being
    guarded by a large {animal}! 

       
    <ChoiceForm />
  </dl>
);

JungleHer.propTypes = {
  name: PropTypes.string.isRequired,
  tool: PropTypes.string.isRequired,
  adjective: PropTypes.string.isRequired,
  animal: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired

};

export default JungleHer;
