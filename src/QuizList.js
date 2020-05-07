import { Route, Link } from 'react-router-dom'
import Answer from './Answer'
import React, { Component } from 'react'
import { findAnswers, findQuestion, getAnswersForQuestion} from './Quiz-helpers';
import QuizQuestion from './dummy-store/QuizQuestion'
import CircleButton from './CircleButton'
import QuestionList from './QuestionList';
//import QuizQuestion 

export default class QuizList extends React.Component {
    //will not be props but instead answersForQuestion.map
    render () {
        const {questionId } = this.props.match.params 
        const answers = QuizQuestion.answers
        const questions = QuizQuestion.questions
        const answersForQuestion = getAnswersForQuestion(answers, questionId)
       
        return (
      <section className='QuizList'>
            {answersForQuestion.map(answer =>
            <li key={answer.id}>
              <Answer
                id={answer.id}
                content={answer.content}
              />
            </li>
         )}
      </section>
         )
         }
          
  
        }
  //Here is where I should implement dummystore - not app.js,
  //instead of being a function - should be a class- can use this.props.match.params
  //not passing props, just components - with dummy store can access all info 
  //can use quiestid that comes from this.props.match.params
  //const { questionId } = this.props.match.params
  //const answersForQuestion = getAnswersForQuestion(answers, questionId)
  //import helper
  //will need to access questions - needs to also show questions (possibly line 11) - need to have both on screeen