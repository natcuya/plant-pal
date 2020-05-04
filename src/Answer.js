import React from 'react'
import { Link } from 'react-router-dom'


export default function Answer(props) {
    return (
      <div className='Answer'>
        <h2 className='Answer__content'>
          <button to={`/answer/${props.id}`}>
            {props.content}
          </button>
        </h2>
      </div>
    )
  }