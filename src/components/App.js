import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

const App = (props) => {
  return (
    <div className="container">
      <h1>Plot points</h1>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node
};

export default App;