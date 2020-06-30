import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import CircleButton from './CircleButton'
import ApiContext from './ApiContext'
import { getReviewsForPlant, findReview, findPlant, countReviewsForPlant} from './Quiz-helpers';
import './BrowsePage.css'

export default class BrowsePage extends React.Component {
  static contextType = ApiContext;

  render() {
    const {plants=[], reviews=[] } = this.context

    return (
      <div className='BrowseListNav'>
        <ul className='PlantSum'> {plants.map(plant =>
            <li key={plant.id}>
            <h2>{plant.name}</h2>
              <img src={plant.img} />
                 <p className="content"> Difficulty Level: {plant.type}
                <br/> {plant.content}
                </p>
        <p className='BrowseListNav__num-notes'>
         Number of Reviews:  {countReviewsForPlant(reviews, plant.id)}
        </p>
          <Link className='BrowseistNav__folder-link' to={`/plants/${plant.id}`}>
                Leave a Review
            </Link> 
            </li>
          )}
        </ul>
      </div>
    )
  }
}