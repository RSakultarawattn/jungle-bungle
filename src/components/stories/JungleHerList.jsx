import React from 'react';
import JungleHer from './JungleHer';
import { useSelector } from 'react-redux';
import { getAllState } from '../../selectors/storySelectors';

const JungleHerList = () => { 
  const storyElement = useSelector(getAllState);

  
   
  return (
    <div>
      <JungleHer {...storyElement}/>
    </div>
  );
};
 
export default JungleHerList;
  

  
