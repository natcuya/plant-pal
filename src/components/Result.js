import React from 'react';
import PropTypes from 'prop-types';
import './Result.css'

function Result(props) {
  return (
      <div className="results">
        Your plant pal is...   
        <br/>
        <h3>
        <i className="fas fa-seedling"></i> <strong>{props.quizResult}! </strong><i className="fas fa-seedling"></i>
      </h3>
      <br/>
      <a className = "result-link" href='/browse'> Check out Reviews! </a>
      </div>
  );
};

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;