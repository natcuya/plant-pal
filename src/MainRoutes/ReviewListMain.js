import React from 'react'
import { Link } from 'react-router-dom'
import Note from '../Note'
import {Rating} from '../Rating'
import CircleButton from '../CircleButton'
import ApiContext from '../ApiContext'
//import './NoteListMain.css'
import config from '../config';
import { getReviewsForPlant, findReview, findPlant} from '../Quiz-helpers';


export default class ReviewListMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      plants: []
    };
  }
  static defaultProps = {
    match: {
      params: {}
    }
  }
static contextType = ApiContext;

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

  handleDeleteReview = reviewid => {
    console.log( this.state.reviews)
    this.props.history.push(`/`)
    this.setState({
      reviews: this.state.reviews.filter(review => review.id !== reviewid)
    });
    console.log( this.state.reviews)
  }

  render() {
   const { plantid } = this.props.match.params
    const { reviewid } = this.props.match.params
    const reviews = this.state.reviews
    const plants = this.state.plants
    const review = findReview(reviews, reviewid) || {}
    const plant = findPlant(plants, review.plantid)
    const reviewsForPlant = getReviewsForPlant(reviews, plantid)
    
    return (
      <section className='NoteListMain'>
    <div className='NoteListMain__button-container'>
          <CircleButton
            tag={Link}
            to='/add-review'
            type='button'
            className='NoteListMain__add-note-button'
          >
            <br />
           Add review
          </CircleButton>
        </div>
        <ul>
          {reviewsForPlant.map(review =>
            <li key={review.id}>
              <Note
                id={review.id}
               content={review.content}
                onDeleteReview={this.handleDeleteReview}
              />
               <Rating rating={review.rating}/>
            </li>
          )}
        </ul>     
      </section>
    )
  }
}