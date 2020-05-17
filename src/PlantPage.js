import { Route, Link } from 'react-router-dom'
import Note from './Note'
import PlantContext from './PlantContext'
import React, { Component } from 'react'
import { Hyph, Section } from './Utils'
import ReviewForm from './ReviewForm'
import { Rating } from './Rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { findNotes, findPlant, getNotesForPlant} from './Quiz-helpers';
import BrowseData from './dummy-store/BrowseData'
import Content from './Content'
import './PlantPage.css'


export default class PlantPage extends React.Component {
    constructor() {
        super()
    this.state = {
        reviews: [],
        plants: [],
    }
}
static contextType = PlantContext

    handleNextPlant = plant => {
        this.setState({
          plants: [
            ...this.state.plants,
           plant
          ]
        })
      }
      renderPlant() {
        const plants = BrowseData.plants
        const reviews = BrowseData.reviews
        return <>
          <h2>{plants.name}</h2>
          <PlantContent plants={plants} />
          <PlantReviews reviews={reviews} />
          <ReviewForm />
        </>
      }
      //implement api context - we changing stats so this could be useful
      
    //will not be props but instead answersForQuestion.map
    render () {
        let content = this.renderPlant()
        const {plantId} = this.props.match.params
        const {reviewId } = this.props.match.params 
        const reviews = BrowseData.reviews
        const review= findNotes(reviews, reviewId) || {}
        const plants = BrowseData.plants
        const plant = findPlant(plants, review.plantId)
        const reviewsForPlant = getNotesForPlant(reviews, plantId)

    return (
        
      <section className='Page'>
          <Section className='PlantPage'>
        {content}
          </Section> 
          <Content onSubmit={this.handleSubmit}>
     {reviewsForPlant.map(review =>
            <li key={review.id}>
            <Note
                id={review.id}
                content={review.content}/>
                  <Rating rating={review.rating} />
            </li>)}
         </Content>
      </section>
         ) }}
    
function PlantContent({ plants }) {
    return (
       <p className='PlantPage__content'>
        {plants.content}
        </p>
            )
          }

function PlantReviews({ reviews = [] }) {
    return (
      <ul className='PlantPage__review-list'>
        {reviews.map(review =>
          <li key={review.id} className='PlantPage__review'>
            <p className='PlantPage__review-text'>
              {review.content}
            </p>
            <p className='PlantPage__review-user'>
              <Rating rating={review.rating} />
            </p>
          </li>
        )}
      </ul>
      
    )
}
