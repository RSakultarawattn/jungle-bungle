import React from 'react';
import ChoiceForm from '../../forms/ChoiceForm';

import './App.css';
import JungleHer from '../stories/JungleHer';
import JungleThey from '../stories/JungleThey';
import JungleHim from '../stories/JungleHim';
import JungleHerList from '../stories/JungleHerList';


export default function App() {
  return (
    
    <>
      <h1>Jungle Bungle</h1>
      <ChoiceForm />
      {/* <JungleHer/> */}
      <JungleHerList/>
      {/* <JungleThey/>
      <JungleHim/> */}



      
      
    </>
  );
}
