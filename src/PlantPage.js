import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import CircleButton from './CircleButton'
import ApiContext from './ApiContext'
import { getReviewsForPlant, findReview, findPlant, countReviewsForPlant} from './Quiz-helpers';


export default class ReviewListNav extends React.Component {
    static contextType = ApiContext;
  
    render() {
      const {plants=[], reviews=[] } = this.context
  
      return (
        <div className='ReviewListNav'>
          <ul className='ReviewListNav__list'>
            {plants.map(plant =>
              <li key={plant.id}>
                <Link
                  className='ReviewListNav__folder-link'
                  to={`/plants/${plant.id}`}
                >
                     <span className='ReviewListNav__num-notes'>
                  {countReviewsForPlant(reviews, plant.id)}
                  </span>
                  {plant.name}
                </Link>
            <p>{plant.content}</p>
            
              </li>
            )}
          </ul>
        </div>
      )
    }
  }