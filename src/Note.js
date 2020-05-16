import React from 'react'
import { Link } from 'react-router-dom'

export default function Note(props) {
    return (
      <div className='Plant'>
        <h2 className='Plant__content'>
            {props.content}
        </h2>
      </div>
    )
  }
