import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Nav from './Nav'
import { getNotesForPlant, findNotes, findPlant} from './Quiz-helpers';
import LandingPage from './LandingPage/LandingPage'
import BrowsePage from './BrowsePage'
import QuizPage from './QuizPage'
import PlantPage from './PlantPage'
import './App.css'
import BrowseData from './dummy-store/BrowseData'

export default class App extends Component {
  state = {
    plants: [],
    notes: []
  };

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: ''
    };
  }

//only route needed is the question and question id 
//commit things in sections to prevent from breaking code 
//in route call the component which will then have the id of the question. 
//need to  use findQuestions 
componentDidMount() {
  // fake date loading from API call
  //const setAnswers = questions.map(info => this.setState(info.answers))
  setTimeout(() => this.setState(BrowseData), 600)
}
renderBrowsePageRoutes(){
  const { plants, notes} = this.state
    return(
      <>
     {['/', '/plant/:plantId'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            render={routeProps => {
              const { noteId } = routeProps.match.params
              const { plantId } = routeProps.match.params
              const notesForPlant = getNotesForPlant(notes, plantId)
              return (
                <PlantPage
                  {...routeProps}
                  notes={notesForPlant}
                />
              )
            }}
          /> 
        )}
        <Route
          path='/note/:noteId'
          render={routeProps => {
            const { noteId } = routeProps.match.params
            const note = findNotes(notes, noteId) || {}
            const plant = findPlant(plants, note.plantId)
            return (
              <PlantPage
                {...routeProps}
                plant={plant}
              />
            )
          }}
        />

      </>
    )
}

  render() {
    return (
      <div className='App'>
        <nav>
          <Nav className='App_nav'>
          </Nav>
        </nav>
        <main>
        <Route path='/quiz' component={QuizPage} />
        <Route path='/browse' component={BrowsePage} />
        <Route exact path='/' component={LandingPage} />
        <Route path='/note/:noteId' component= {PlantPage}/>
        <Route path='/plant/:plantId' component={PlantPage} />
        </main>
        <footer>
          Footer
        </footer>
      </div>
    )
  }

}

//setup routes then create folder and test that they are loading properly 