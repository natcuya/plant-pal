import React from 'react'
import { Link } from 'react-router-dom'
import Answer from './Answer'
import CircleButton from './CircleButton'

export default function QuizList(props) {
    return (
      <section className='QuizList'>
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
        <div className='Answer__button-container'>
          <CircleButton
            tag={Link}
            to='/answer-select'
            type='button'
            className='AnswerSelect__button'
          >
            <br />
            Note
          </CircleButton>
        </div>
      </section>
    )
  }
  
  QuizList.defaultProps = {
    answers: [],
  }