import React from 'react';
import ValidationError from './ValidationError';
import ApiContext from './ApiContext';
import config from './config';
//import './AddReview.css';

class AddReview extends React.Component {
    static contextType = ApiContext
    constructor(props) {
        super(props)
        this.state = {
            rating: {
                value: '',
                touched: false
            },
           content: {
                value: '',
                touched: false
            },
            plantid: {
                value: '',
                touched: false
            }
        }
    }

  updateReviewRating(rating) {
    this.setState({rating: {value:rating, touched: true}})
  }

  updateReviewContent(content) {
    this.setState({content: {value:content, touched: true}})
  }

  updateReviewPlant(plantid) {
    this.setState({plantid: {value: plantid, touched: true}})
  }

  handleSubmit(event) {
    event.preventDefault();
    const { rating, content, plantid } = this.state
    const reviewToAdd = {
      rating: rating.value,
      content: content.value,
      plantid: Number(plantid.value),
    }
    fetch(`${config.API_ENDPOINT}/reviews`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reviewToAdd)
    })
    .then(res => {
      console.log(res.body)
      if(!res.ok)
        return res.json().then(e=>Promise.reject(e))
      return res.json()
    })
    .then(review  => {
      console.log('right before addreview pushes to landing')
      this.context.addReview(review)
      this.props.history.push(`/plants/${review.plantid}`)
    //  this.props.history.push('/')
    })
    .catch(error => {
      console.error(error)
    })
  }

  validatePlantName() {
    const name = this.state.name.value.trim();
    if(name.length === 0) {
      return 'Plant name is required'
    }
  }

  validateReviewRating() {
    const rating = this.state.rating.value.trim();
    if(rating.length === 0) {
      return 'Rating is required'
    }
  }

  validateContentName() {
    const content = this.state.content.value.trim();
    if(content.length === 0) {
      return 'Content is required'
    } else if (content.length > 500) {
      return 'Content must be less than 500 characters.'
    }
  }

  render() {
    const ratingError = this.validateReviewRating();
    const contentNameError = this.validateContentName();
    const plantNameError = this.validatePlantName();
    return (
      <section>
        <form className="add-review" onSubmit={ e=> this.handleSubmit(e)}>
          <h2>Create Review</h2>
          <div className="form-group">
            <label htmlFor="review-rating">
              
            </label>
            <input type="text" className="review-input" name="review-rating" id="review-rating" onChange={e => this.updateReviewRating(e.target.value)}>
            </input>
            {this.state.rating.touched && <ValidationError message={ratingError} />}
          </div>
          <div className="form-group">
            <label htmlFor="content-name">
              Content
            </label>
            <textarea className="content-input" name="content-name" id="content-name" onChange={e=> this.updateReviewContent(e.target.value)}/>
            {this.state.content.touched && <ValidationError message={contentNameError} />}
          </div>
          <div className="form-group">
            <label htmlFor="plant-select">Choose a plant:</label>
            <select name="plant-select" id="plant-select" onChange={e=>this.updateReviewPlant(e.target.value)}>
              <option value="">Please select a plant</option>
              {this.context.plants.map(plant => {
                return (
                  <option key={plant.id} value={plant.id}>{plant.name}</option>
                )
              })}
            </select>
            {this.state.plant.touched && <ValidationError message={plantNameError} />}
          </div>
          <div>
          <select
            required
            aria-label='Rate this plant!'
            name='rating'
            id='rating'
          >
            <option value='1'>1 Star</option>
            <option value='2'>2 Stars</option>
            <option value='3'>3 Stars</option>
            <option value='4'>4 Stars</option>
            <option value='5'>5 Stars</option>
          </select>
        </div>
          <button className="add-review-button" disabled={this.validateReviewName() || 
            this.validateContentName() || this.validatePlantName()
            }
           >
            Add Review</button>
        </form>
      </section>
    )
  }
}

export default AddReview