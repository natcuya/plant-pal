import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Nav from './Nav'
import {getAnswersForQuestions, findAnswers, findQuestions} from './Quiz-helpers';
import LandingPage from './LandingPage/LandingPage'
import QuestionList from './QuestionList'
import QuizQuestion from './dummy-store/QuizQuestion'



export default class App extends Component {
  state = {
    questions: [],
    answers: []
  };

  componentDidMount() {
      // fake date loading from API call
      //const setAnswers = questions.map(info => this.setState(info.answers))
      setTimeout(() => this.setState(QuizQuestion), 600)
  }
//only route needed is the question and question id 
//commit things in sections to prevent from breaking code 
//in route call the component which will then have the id of the question. 
//need to  use findQuestions 
 /* renderQuizRoutes(){
    const {questions, answers} = this.state
    return(
      <>
      {['/', '/question/:questionId'].map(path => 
          <Route  key={path}
            path={path}
            render={routeProps => {
            const {questionId} = routeProps.match.params;

            const answersForQuestions = getAnswersForQuestions(answers, questionId)
            return (
           <QuestionList
            {...routeProps}
            answers={answersForQuestions}
          />
             )
           }}
           />
      )}
           <Route
           path='/answer/:answerId'
           render={routeProps => {
             const { answerId } = routeProps.match.params
             const answer = findAnswers(answers, answerId)|| {}
             return (
               <QuestionList
                 {...routeProps}
                 answer={answer}
               />
             )}}/>
         </>
    )   
  }
  
*/

renderQuizQuestionRoutes(){
    return(
      <Route path ={'/question/:questionId'} 
      component = {QuestionList}
      />
    )

}




 
  render() {
    return (
      <div className='App'>
        <nav>
          <Nav classNAame='App_nav'>
          </Nav>
        </nav>
        <main>
        <Route path='/quiz' component={QuestionList} />
        <Route exact path='/' component={LandingPage} />
        {this.renderQuizQuestionRoutes()}
        </main>
        <footer>
          Footer
        </footer>
      </div>
    )
  }

}

//setup routes then create folder and test that they are loading properly 