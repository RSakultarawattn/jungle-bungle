import React from 'react';
import PropTypes from 'prop-types';

const JungleHim = ({ name, tool, adjective, animal, image }) => (
  <figure>
    <img src={image} />
    {name} woke to find himself in a close, {adjective}, warm environment.  
     The many sounds surrounding him somehow seemed familiar, though 
    from where he could not recall.  He lay there for some time with
     his eyes closed in an attempt to mentally orient himself to his new 
     surroundings.	When at last he opened his eyes, he saw green leaves
      framing a thin strip of blue sky.  He rose to a sitting position 
      from where he lay on the ground and took in the surrounding foliage.
        He soon realized he was in a jungle. How he could have to come 
        be there he 
    had no idea, but intuition suggested the need to get 
    out of the jungle as soon as possible.
    He arose from the forest floor and did a complete turn  
    in an attempt to orient himself, and choose a 
    direction of travel. {name} soon saw that thickness of the
     vegetation was going to make travel difficult
    and wished he had a tool of some kind to assist him.
      He gasped when he saw 
    a {tool} leaning against a nearby tree, but was even more 
    astonished when he noticed it was being
    guarded by a large {animal}!
       

  </figure>
);

JungleHim.propTypes = {
  name: PropTypes.string.isRequired,
  tool: PropTypes.string.isRequired,
  adjective: PropTypes.string.isRequired,
  animal: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired

};

export default JungleHim;
