import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Nav from './Nav'
import config from './config'
import AddReview from './AddReview'
import ApiContext from './ApiContext'
import { getReviewsForPlant, findReview, findPlant} from './Quiz-helpers';
import LandingPage from './LandingPage/LandingPage'
import BrowsePage from './BrowsePage'
import QuizPage from './QuizPage'
import PlantPage from './PlantPage'
import ReviewListMain from './MainRoutes/ReviewListMain'
import ReviewPageMain from './MainRoutes/ReviewPageMain'
import ReviewListNav from './NavRoutes/ReviewListNav'
import ReviewPageNav from './NavRoutes/ReviewPageNav'
import Error from './Error'
import FontAwesome from 'react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import './images/plant2.jpg'
import './images/plant3.jpg'
import './images/plant4.jpg'
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
  };

handleAddReview = review => {
  const newReviewsArr = this.state.reviews.slice();
  newReviewsArr.push(review);
  this.setState({
    reviews: newReviewsArr
  });
};

handleAddPlant = plant => {
  const newPlantArr = this.state.plants.slice();
  newPlantArr.push(plant);
  this.setState({
    plants: newPlantArr
  });
};
handleDeleteReview = reviewid => {
console.log( this.state.reviews)
this.setState({
    reviews: this.state.reviews.filter(review => review.id !== reviewid)
 });
console.log( this.state.reviews)
};

  render() {
    const value = {
      reviews: this.state.reviews,
      plants: this.state.plants,
      deleteReview: this.handleDeleteReview,
      addReview: this.handleAddReview
  };
    return (
      <ApiContext.Provider value={value}>
      <div className="app">
      <section id= "page">
          <header className="App__header">
              <h1>
            Plant Pals
              </h1>
                <Nav className='App_nav'>
                </Nav>
          </header>
          <main className="App__main">
          <Route exact path='/' component={LandingPage} />
        </main>
        <Route path="/add-review" component={AddReview} /> 
        <Route path='/browse' component={BrowsePage} />
        <Route path= '/plants/:plantid' component= {ReviewListMain} />
        <Route path='/reviews/:reviewid' component={ReviewPageMain} />
        <Route path='/quiz' component={QuizPage} />
        </section>
      </div>
  </ApiContext.Provider>
    )
  };
};

//setup routes then create folder and test that they are loading properly 