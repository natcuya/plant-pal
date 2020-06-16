import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import CircleButton from '../CircleButton'
import ApiContext from '../ApiContext'
import { getReviewsForPlant, findReview, findPlant, countReviewsForPlant} from '../Quiz-helpers';
//import './NoteListNav.css'

export default class ReviewListNav extends React.Component {
  static contextType = ApiContext;

  render() {
    const {plants=[], reviews=[] } = this.context

    return (
      <div className='NoteListNav'>
        <ul className='NoteListNav__list'>
          {plants.map(plant =>
            <li key={plant.id}>
              <Link
                className='NoteListNav__folder-link'
                to={`/plants/${plant.id}`}
              >
                   <span className='NoteListNav__num-notes'>
                {countReviewsForPlant(reviews, plant.id)}
                </span>
                {plant.name}
              </Link>
              <img src={plant.img} />
          <p>{plant.content}</p>
            </li>
          )}
        </ul>
      </div>
    )
  }
}