import React from 'react';
import ValidationError from './ValidationError';
import ApiContext from './ApiContext';
import config from './config';
//import { getReviewsForPlant, findReview, findPlant, findPlantByName} from '../Quiz-helpers';
import './AddReview.css';

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
        this.setState({
          rating: {
            value: rating,
            touched: true
          }
        })
      }
    
      updateReviewContent(content) {
        this.setState({
          content: {
            value: content,
            touched: true
          }
        })
      }
      updateReviewPlant(plantid) {
        this.setState({
            plantid: {
                value: plantid, 
                touched: true}
            })
      } 
 
 /* updateReviewRating(rating) {
    this.setState({rating: {value:rating, touched: true}})
  }

  updateReviewContent(content) {
    this.setState({content: {value:content, touched: true}})
  }

  updateReviewPlant(id) {
    this.setState({plant: {value: id, touched: true}})
  }
*/
handleSubmit(event) {
    event.preventDefault();
   // const { rating, content, name } = e.target;
    //const {plants=[]} = this.context;
    //const plant = findPlantByName(plants, name.value);
    const { rating, content, plantid } = this.state
   const reviewToAdd = {
       rating: Number(rating.value),
       content: content.value, 
       plantid:  Number(plantid.value),
    }
   //const rating = event.target.rating.value
   // const plantid = this.context.plants.find(plant => plant.name === event.target.name.value).id
   // const content = event.target.content.value  

   fetch(`${config.API_ENDPOINT}/reviews`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reviewToAdd)
    })
    // this.props.history.push(`/plants/${review.plantid}`)
    .then(res => {
        console.log(res.body)
        if(!res.ok)
          return res.json().then(e=>Promise.reject(e))
        return res.json()
      })
      .then(review => {
        console.log('right before addreview pushes to landing')
        this.context.addReview(review)
        this.props.history.push(`/plants/${review.plantid}`)
      })
      .catch(error => {
        console.error(error)
      })
    }

    validatePlantName() {
        const plantid = this.state.plantid.value.trim();
        if(plantid.length === 0) {
          return 'Plant name is required'
        }
      }
    
  validateReviewRating() {
    const rating = this.state.rating.value.trim();
    if(rating.length === 0) {
      return 'Rating is required'
    }
  }

  validateReviewContent() {
    const content = this.state.content.value.trim();
    if(content.length === 0) {
      return 'Content is required'
    } else if (content.length > 500) {
      return 'Content must be less than 500 characters.'
    }
  }

  render() {
    const plantError = this.validatePlantName();
    const ratingError = this.validateReviewRating();
    const contentError = this.validateReviewContent();

   return (
      <section className="AddReview">
        <form className="add-review" onSubmit={ e=> this.handleSubmit(e)}>
          <h2>Create Review</h2>
          <div className="form-group">
            <label htmlFor="review-content">
            Write your review:
            </label>
            <br/>
            <input type="text" className="review-input" name="review-content" id="review-content" onChange={e => this.updateReviewContent(e.target.value)}>
            </input>
            {this.state.content.touched && <ValidationError message={contentError} />}
          </div>
          <div className="form-group">
            <label htmlFor="plant-select">Choose a plant:</label>
            <br/>
            <select name="plant-select" id="plant-select" onChange={e=>this.updateReviewPlant(e.target.value)}>
                <option value="">Please select a plant</option>
              {this.context.plants.map(plant => {
                return ( 
                <option key={plant.id} value={plant.id}>{plant.name}</option>)})}
            </select>
            {this.state.plantid.touched && <ValidationError message={plantError} />}
          </div>

          <div className="form-group">
            <label htmlFor="rating">Rate this plant (1-5): </label>
            <input type="number" className="rating" name="rating" id="rating" min="1" max="5"onChange={e => this.updateReviewRating(e.target.value)}>
            </input>
          {this.state.rating.touched && <ValidationError message={ratingError} />}
        </div>
          <button className="add-review-button" disabled={this.validateReviewContent() || 
            this.validatePlantName()}
           >Add Review</button>
        </form>
      </section>
    )
  }
}

export default AddReview