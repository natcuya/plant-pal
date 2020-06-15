import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Nav from './Nav'
import config from './config'
import AddReview from './AddReview'
import ApiContext from './ApiContext'
import { getReviewsForPlant, findReviews, findPlant} from './Quiz-helpers';
import LandingPage from './LandingPage/LandingPage'
//import BrowsePage from './BrowsePage'
import QuizPage from './QuizPage'
//import PlantPage from './PlantPage'
import ReviewListMain from './MainRoutes/ReviewListMain'
import ReviewPageMain from './MainRoutes/ReviewPageMain'
import ReviewListNav from './NavRoutes/ReviewListNav'
import ReviewPageNav from './NavRoutes/ReviewPageNav'
import Error from './Error'
import './App.css'
import quizQuestions from './dummy-store/quizQuestions'

export default class App extends Component {
  state = {
    reviews: [],
    plants: [],
  };
  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/reviews`),
      fetch(`${config.API_ENDPOINT}/plants`)
    ])
      .then(([reviewsRes, plantsRes]) => {
        if (!reviewsRes.ok)
          return reviewsRes.json().then(e => Promise.reject(e))
        if (!plantsRes.ok)
          return plantsRes.json().then(e => Promise.reject(e))

        return Promise.all([
          reviewsRes.json(),
          plantsRes.json(),
        ])
      })
      .then(([reviews, plants]) => {
        this.setState({ reviews, plants })
      })
      .catch(error => {
        console.error({ error })
      })
  }

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

handleAddReview = review => {
  const newReviewsArr = this.state.reviews.slice();
  newReviewsArr.push(review);
  this.setState({
    reviews: newReviewsArr
  });
}

handleAddPlant = plant => {
  const newPlantArr = this.state.plants.slice();
  newPlantArr.push(plant);
  this.setState({
    plants: newPlantArr
  });
}
handleDeleteReview = reviewid => {
console.log( this.state.reviews)
this.setState({
    reviews: this.state.reviews.filter(review => review.id !== reviewid)
 });
console.log( this.state.reviews)
};

renderNavRoutes() {
  return (
      <Error>
          {['/', '/plants/:plantid'].map(path => (
              <Route
                  exact
                  key={path}
                  path={path}
                  component={ReviewListNav}
              />
          ))}
          <Route path="/reviews/:reviewid" component={ReviewPageNav} />
      </Error>
  );
}

renderMainRoutes() {
  return (
      <Error>
          {['/', '/plants/:plantid'].map(path => (
              <Route
                  exact
                  key={path}
                  path={path}
                  component={ReviewListMain}
              />
          ))}
          <Route path="/reviews/:reviewid" component={ReviewPageMain} />
          <Route path="/add-review" component={AddReview} />
      </Error>
  );
}

/* pre edits
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
*/
  render() {
    const value = {
      reviews: this.state.reviews,
      plants: this.state.plants,
      deleteReview: this.handleDeleteReview,
      addReview: this.handleAddReview
  };
    return (
      <ApiContext.Provider value={value}>
      <div className="App">
      <nav>
          <Nav className='App_nav'>
          </Nav>
        </nav>
          <header className="App__header">
              <h1>
                Plant Pals                     
              </h1>
          </header>
          <main className="App__main">
            <h3>{this.renderNavRoutes()}</h3>
            <h3>{this.renderMainRoutes()}</h3>
        </main>
        <Route path='/quiz' component={QuizPage} />
        <Route exact path='/' component={LandingPage} />
      </div>
      <footer>
  
      </footer>
  </ApiContext.Provider>
  
    )
  }

}

//setup routes then create folder and test that they are loading properly 