import React from 'react';
import PropTypes from 'prop-types';
import JungleHer from './JungleHer';

export default function JungleHerList({ jungleHer }) {
  return (
    <ul>
      {
        jungleHer.map((jungleHer) => {
          return (
            <li>
              <JungleHer {...jungleHer}/>
            </li>
          );
        })
      }
    </ul>
  );
}
  
JungleHerList.propTypes = {
  jungleHer: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};


  
