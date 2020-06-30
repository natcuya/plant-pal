import React, { Component } from 'react'
import Content from '../Content'
import './LandingPage.css'
export default class LandingPage extends Component {
  render() {
    return (
      <div className='land'>
        <h3>Grow With Us and Cultivate your Green Thumb!</h3>
        <p>Plant Pal is curated to find the perfect plant that fits your lifestyle. To ensure we find your perfect match, take our quiz. The quiz will match a plant suited to your environmental constraints. Click the leaf below.</p>
        <a href='/quiz'>
        <i className="fas fa-leaf"></i><i className="fas fa-leaf"></i><i className="fas fa-leaf"></i></a>
        <h3>Have an idea of what you're looking for?</h3>
        <p>
        Browse through our catalog! Rate and Review your favorite plant!     
        Click the leaf below.</p>
        <a href='/browse'>
        <i className="fas fa-leaf"><i className="fas fa-leaf"></i><i className="fas fa-leaf"></i></i></a>
      </div>
    )
  }
}