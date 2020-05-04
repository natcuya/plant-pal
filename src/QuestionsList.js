import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import CircleButton from './CircleButton'
import { findAnswers, findQuestion, getAnswersForQuestion} from './Quiz-helpers';

export default function QuestionsList(props) {
    return (
      <div className='QuestionsList'>
        <ul className='QuestionsList__list'>
          {props.questions.map(question =>
            <li key={question.id}>
              <NavLink
                className='QuizList__folder-link'
                to={`/question/${question.id}`}
              >
                {question.info}
              </NavLink>
            </li>
          )}
        </ul>
        <div className='NoteListNav__button-wrapper'>
          <CircleButton
            tag={Link}
            to='/add-folder'
            type='button'
            className='NoteListNav__add-folder-button'
          >
        
            <br />
            Question
          </CircleButton>
        </div>
      </div>
    )
  }
  
 QuestionsList.defaultProps = {
    questions: []
  }