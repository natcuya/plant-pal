import React from 'react'
import CircleButton from '../CircleButton'
import ApiContext from '../ApiContext'
import { getReviewsForPlant, findReview, findPlant} from '../Quiz-helpers';
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
    const { reviews, plants } = this.context
    const { reviewid } = this.props.match.params
    //const { plantid } = this.props.match.params
    const review = findReview(reviews, reviewid) || {};
    const plant = findPlant(plants, review.plantid);
    const plantName = () => 
    (plant !== undefined)
    ? <span>{plant.name}</span>
    : <span>Loading...</span>;

    return (
      <div className='ReviewPageNav'>
        <CircleButton
          tag='button'
          role='link'
          onClick={() => this.props.history.goBack()}
          className='ReviewPageNav__back-button'
        >
          <br />
          Back
        </CircleButton>
        <h3 className='ReviewNav-plantName'>
            {plantName(plant)}
          </h3>
         hellp
         {plant && (
          <h3 className='ReviewPageNav__plant-name'>
            {plant.content}
          </h3>
        )}
      </div>
    )
  }
}