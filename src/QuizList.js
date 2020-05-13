import { Route, Link } from 'react-router-dom'
import Answer from './Answer'
import CircleButton from './CircleButton'
import React, { Component } from 'react'
import { findAnswers, findQuestion, getAnswersForQuestion} from './Quiz-helpers';
import QuizQuestion from './dummy-store/QuizQuestion'
import Content from './Content'
import './QuizList.css'
//import QuizQuestion 

export default class QuizList extends React.Component {
    constructor() {
        super()
    this.state = {
        questions: [],
        answers: [],
    }
}
//May need to go to next question
    handleNextQuestion = question => {
        this.setState({
          questions: [
            ...this.state.questions,
           question
          ]
        })
      }
    
      //implement api context - we changing stats so this could be useful
      
    //will not be props but instead answersForQuestion.map
    render () {
        const {questionId } = this.props.match.params 
        const {answerId } = this.props.match.params 
        const answers = QuizQuestion.answers
        const questions = QuizQuestion.questions
        const answer = findAnswers(answers, answerId) || {}
        const answersForQuestion = getAnswersForQuestion(answers, questionId)
        const question = findQuestion(questions, answer.questionId)
        return (
   
      <section className='QuizList'>
          <Content onSubmit={this.handleSubmit}>
          {questions.map( question => {
            return <p key={question.id[0]}>
          <Link to={`/question/${question.id}`}>
            Question{question.id}:{question.info}
            </Link>
           </p>
    })}
            {answersForQuestion.map(answer =>
            <li key={answer.id}>
            <input type ="radio" className="radioCustomButton"/> 
              <Answer
                id={answer.id}
                content={answer.content}/>
            </li>)}
            <div className='buttons'>
            <CircleButton
            tag={Link}
            to={'/results'}
            type='button'
            className='NoteListMain__add-note-button'
          >
            <br />
           Next
          </CircleButton>
            </div>
         </Content>
      </section>
         ) }}
  //Here is where I should implement dummystore - not app.js,
  //instead of being a function - should be a class- can use this.props.match.params
  //not passing props, just components - with dummy store can access all info 
  //can use quiestid that comes from this.props.match.params
  //const { questionId } = this.props.match.params
  //const answersForQuestion = getAnswersForQuestion(answers, questionId)
  //import helper
  //will need to access questions - needs to also show questions (possibly line 11) - need to have both on screeen

  //need to keep track of what user selected - that is how you will get results - need to update state