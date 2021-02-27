import React from 'react';
import JungleChoiceForm from '../../forms/JungleChoiceForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import './App.css';
import JungleHer from '../stories/JungleHer';
//import JungleThey from '../stories/JungleThey';
//import JungleHim from '../stories/JungleHim';
import JungleHerList from '../stories/JungleHerList';
import Header from './Header';
import Home from './Home';
//import './Home.css';


export default function App() {
  return (


    <Router>
     
      <Switch>
       
        <Route exact path="/"><Home/></Route>
        <Route
          path="/JungleChoiceForm"
          render={(routerProps) => {
            return (
              <>
                <Header name="board" />
                <JungleChoiceForm {...routerProps} />
              </>
            );}
          }
        />
        <Route
          path="/JungleHerList"
          render={(routerProps) => <JungleHerList {...routerProps} />}
        />
        <Route
          path="/JungleHer"
          render={(routerProps) => <JungleHer {...routerProps} />}
        />
      </Switch>
    </Router>
    
    
  );
}
