import React, { Component } from 'react'
import Content from '../Content'
import './LandingPage.css'
export default class LandingPage extends Component {
  render() {
    return (
      <div className='land'>
        <section className= "sec1">
        <h3>Grow With Us and Cultivate your Green Thumb!</h3>
        <p>Plant Pal is curated to find the perfect plant that fits your lifestyle. To ensure we find your perfect match, take our quiz. The quiz will match a plant suited to your environmental constraints. Click the leaf below.</p>
        <a href='/quiz'>
        Take Quiz</a>
        </section>
        <section className= "sec2">
        <h3>Have an idea of what you're looking for?</h3>
        <p>
        Browse through our catalog! Rate and Review your favorite plant!     
        Click the leaf below.</p>
        <a href='/browse'>Browse</a>
        </section>
      </div>
    )
  }
};