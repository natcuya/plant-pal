import React from 'react'
import { Link } from 'react-router-dom'
import Answer from './Answer'
import CircleButton from './CircleButton'

export default function QuestionMain(props) {
    return (
      <section className='QuestionMain'>
        <ul>
          {props.answers.map(answer =>
            <li key={answer.id}>
              <Answer
                id={answer.id}
                content={answer.content}
              />
            </li>
          )}
        </ul>
        <div className='NoteListMain__button-container'>
          <CircleButton
            tag={Link}
            to='/add-note'
            type='button'
            className='NoteListMain__add-note-button'
          >
            <br />
            Answer
          </CircleButton>
        </div>
      </section>
    )
  }
  
  QuestionMain.defaultProps = {
    question: [],
  }