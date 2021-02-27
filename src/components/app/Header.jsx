import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import styles from './App.css';
import styles from './Home.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <p className={styles.intro}>
            Hello, and welcome to the adventure maker!
        </p>
        <dt className={styles.advent}>What kind of 
        adventure are you looking for today?</dt>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/JungleChoiceForm">Jungle Story</Link>
          </li>
         
        </ul>
      </div>
    );
  }
}
