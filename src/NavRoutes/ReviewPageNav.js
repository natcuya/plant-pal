import React from 'react'
import CircleButton from '../CircleButton'
import ApiContext from '../ApiContext'
import { getReviewsForPlant, findReviews, findPlant} from '../Quiz-helpers';
//import './NotePageNav.css'

export default class ReviewPageNav extends React.Component {
  static defaultProps = {
    history: {
      goBack: () => { }
    },
    match: {
      params: {}
    }
  }
  static contextType = ApiContext;

  render() {
    const { reviews, plants, } = this.context
    const { reviewid } = this.props.match.params
    const review = findReviews(reviews, reviewid) || {}
    const plant = findPlant(plants, review.plant)
    return (
      <div className='NotePageNav'>
        <CircleButton
          tag='button'
          role='link'
          onClick={() => this.props.history.goBack()}
          className='NotePageNav__back-button'
        >
          <br />
          Back
        </CircleButton>
        {plant && (
          <h3 className='NotePageNav__folder-name'>
            {plant.content}
          </h3>
        )}
      </div>
    )
  }
}