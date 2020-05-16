import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Content from './Content'
import Note from './Note'
import {getNotesForPlant, findPlant, findNotes} from './Quiz-helpers'
import BrowseData from './dummy-store/BrowseData'
import './BrowsePage.css'
export default class BrowsePage extends React.Component {
    constructor() {
        super()
    this.state = {
        notes: [],
        plants: [],
    }
}
handleNextPlant = plant => {
    this.setState({
      plants: [
        ...this.state.plants,
       plant
      ]
    })
  }
    
  render () {
    const {plantId} = this.props.match.params
    const {noteId } = this.props.match.params 
    const notes = BrowseData.notes
    const note = findNotes(notes, noteId) || {}
    const plants = BrowseData.plants
    const plant = findPlant(plants, note.plantId)
    const notesForPlant = getNotesForPlant(notes, plantId)

    
        return (
        <section className="BrowsPage">
            <Content onSubmit={this.handleSubmit}>
            <h2>
            Have an idea of what your're looking for?
            Browse through our catalog!
            </h2>
            <h3>Rate and Review your favorite plant by clicking on their name!</h3>
         {plants.map(plant => 
         <li key={plant.id} value= {plant.id}>
              <Link to={`/plant/${plant.id}`}> Plant Name: {plant.name}</Link>
              <img src ={plant.img} />
              <div className='field'>
            <textarea id='note-content-input' />
          </div>
             <p className="level">Difficulty Level: {plant.type}</p>
             <p>Summary: {plant.content}</p> 
         </li>)}
         </Content>
         </section>

        )
    }
}
