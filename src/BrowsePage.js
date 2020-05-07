import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Content from './Content'
import QuizQuestion from './dummy-store/BrowseData'
import BrowseData from './dummy-store/BrowseData'


export default class BrowsePage extends React.Component {
    static defaultProps = {
        plant: [],
      }
    
    render() {
        const plant = BrowseData.plant
        return (
        <section className="BrowsPage">
            <h2>
            Have an idea of what your're looking for?
            Browse through our catalog!
            </h2>
         {plant.map(plant => 
         <li key={plant.id} value= {plant.id}>
              <Link to={`/plant`}> Plant Name: {plant.name}</Link>
             <p>Difficulty Level: {plant.type}</p>
         </li>)}
         </section>
        )
    }
}