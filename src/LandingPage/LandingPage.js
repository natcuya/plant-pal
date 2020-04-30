
import React, { Component } from 'react'
import Content from '../Content'

export default class HomePage extends Component {
  render() {
    return (
      <Content className='LandingPage'>
        <h2>Welcome to Plant Pals</h2>
        <p>Grow With Us!</p>

        <h3>Cultivate your Green Thumb</h3>
        <p>Plant Pal is curated to find the perfect plant that fits your lifestyle</p>

        <h3>Take our quiz to find your plant pal!</h3>
        <p>To ensure we find your perfect match, take our quiz. The quiz will match a plant suited to your environmental constraints.</p>
        <h3>Have an idea of what your're looking for?</h3>
        <p>
        Browse through our catalog!
        </p>
        <h3>Want to Save your fave plant matches and log its growth? Sign up for a free account!</h3>
        <p>
       
        </p>
      </Content>
    )
  }
}