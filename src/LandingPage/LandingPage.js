import React, { Component } from 'react'
import Content from '../Content'
import './LandingPage.css'
export default class LandingPage extends Component {
  render() {
    return (
      <Content className='LandingPage'>
        <h2>Welcome to Plant Pals</h2>
        <h3>Grow With Us and Cultivate your Green Thumb!</h3>
        <p>Plant Pal is curated to find the perfect plant that fits your lifestyle</p>

        <h4>Take our quiz to find your plant pal!</h4>
        <p>To ensure we find your perfect match, take our quiz. The quiz will match a plant suited to your environmental constraints.</p>
        <h4>Have an idea of what your're looking for?</h4>
        <p>
        Browse through our catalog! Rate and Review your favorite plant!     
        </p>
      </Content>
    )
  }
}