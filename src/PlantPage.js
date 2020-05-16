import { Route, Link } from 'react-router-dom'
import Note from './Note'
//mport CircleButton from './CircleButton'
import React, { Component } from 'react'
import { findNotes, findPlant, getNotesForPlant} from './Quiz-helpers';
import BrowseData from './dummy-store/BrowseData'
import Content from './Content'

export default class PlantPage extends React.Component {
    constructor() {
        super()
    this.state = {
        notes: [],
        plants: [],
    }
}
//May need to go to next question
    handleNextPlant = plant => {
        this.setState({
          plants: [
            ...this.state.plants,
           plant
          ]
        })
      }
    
      //implement api context - we changing stats so this could be useful
      
    //will not be props but instead answersForQuestion.map
    render () {
        const {plantId} = this.props.match.params
        const {noteId } = this.props.match.params 
        const notes = BrowseData.notes
        const note = findNotes(notes, noteId) || {}
        const plants = BrowseData.plants
        const plant = findPlant(plants, note.plantId)
        const notesForPlant = getNotesForPlant(notes, plantId)

    return (
   
      <section className='PlantPage'>
          <Content onSubmit={this.handleSubmit}>
     {notesForPlant.map(note =>
            <li key={note.id}>
            <input type ="radio" className="radioCustomButton"/> 
            <Note
                id={note.id}
                content={note.content}/>
            </li>)}
            <label htmlFor='note-content-input'>
              Write A Review:
            </label>
            <textarea className="content-input" name="content-name" id="content-name" onChange={e=> this.updateNoteContent(e.target.value)}/>
            <div className='buttons'>
            <button type='submit'>
              Add note
            </button>
          </div>
         </Content>
      </section>
         ) }}