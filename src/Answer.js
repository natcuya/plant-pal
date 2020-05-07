import React from 'react'
import { Link } from 'react-router-dom'

export default function Answer(props) {
    return (
      <div className='Answer'>
        <h2 className='Answer__content'>
            {props.content}
        </h2>
      </div>
    )
  }