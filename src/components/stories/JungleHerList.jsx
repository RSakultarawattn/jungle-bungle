import React from 'react';
import PropTypes from 'prop-types';
import JungleHer from './JungleHer';

export default function JungleHerList({ jungleHer }) {
  return (
    <ul>
      {
        jungleHer.map((jungleHer, i) => {
          return (
            <li key={i}>
              <JungleHer {...jungleHer}/>
            </li>
          );
        })
      }
    </ul>
  );f
}
  
JungleHerList.propTypes = {
  jungleHer: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string.isRequired
  }))
};

  
