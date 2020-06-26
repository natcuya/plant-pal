import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  return (
      <div>
        Your plant pal is A... <strong>{props.quizResult}</strong>!
      <br/>
      <br/>
      <a href='/browse'> Browse our plant page and check out other plants! </a>
      </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;