import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Nav from './Nav'
import { findAnswers, findQuestion, getAnswersForQuestion} from './Quiz-helpers';
import LandingPage from './LandingPage/LandingPage'
import QuestionList from './QuestionList'
import QuestionsList from './QuestionsList'
import QuestionMain from './QuestionMain'
import QuizList from './QuizList'
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
 
renderQuizRoutes() {
  const { answers, questions } = this.state
  return (
    <>
      <Route
        path='/answer/:answerId'
        render={routeProps => {
          const { answerId } = routeProps.match.params
          const answer = findAnswers(answers, answerId) || {}
          const question = findQuestion(questions, answer.questionId)
          return (
            <QuestionMain
              {...routeProps}
              question={question}
            />
          )
        }}
      />
    </>
  )
}

renderQuizQuestionRoutes(){
  const { questions, answers} = this.state
    return(
      <>
     {['/', '/question/:questionId'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            render={routeProps => {
              const { questionId } = routeProps.match.params
              const answersForQuestion = getAnswersForQuestion(answers, questionId)
              return (
                <QuizList
                  {...routeProps}
                  answers={answersForQuestion}
                />
              )
            }}
          />
        )}
      </>
    )
}


  render() {
    return (
      <div className='App'>
        <nav>
          <Nav classNAame='App_nav'>
          {this.renderQuizRoutes()}

          </Nav>
        </nav>
        <main>
        <Route path='/quiz' component={QuestionList} />
        {this.renderQuizQuestionRoutes()}
        <Route exact path='/' component={LandingPage} />
        </main>
        <footer>
          Footer
        </footer>
      </div>
    )
  }

}

//setup routes then create folder and test that they are loading properly 