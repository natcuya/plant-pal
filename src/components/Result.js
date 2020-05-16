import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  return (
      <div>
        Your plant pal is A... <strong>{props.quizResult}</strong>!
      </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;