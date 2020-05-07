import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Nav from './Nav'
import { findAnswers, findQuestion, getAnswersForQuestion} from './Quiz-helpers';
import LandingPage from './LandingPage/LandingPage'
import QuestionList from './QuestionList'
import BrowsePage from './BrowsePage'
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
          </Nav>
        </nav>
        <main>
        <Route path='/quiz' component={QuestionList} />
        <Route path='/browse' component={BrowsePage} />
        <Route path='/question/:questionId' component= {QuizList}/>
        
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