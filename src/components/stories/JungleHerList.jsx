import React from 'react';
import JungleHer from './JungleHer';
import { useSelector } from 'react-redux';
import { getAllState } from '../../selectors/storySelectors';
import { Link } from 'react-router-dom';
import styles from './JungleHer.css';

const JungleHerList = () => { 
  const storyElement = useSelector(getAllState);
  
   
  return (
    
    <div className={styles.tale}>
      <JungleHer {...storyElement}/>
      <li>
        <Link to="/">Home</Link>
      </li>
    </div>
    
  );
};




export default JungleHerList;
  

  
