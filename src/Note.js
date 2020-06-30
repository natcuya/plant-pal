import React from 'react'
import { Link } from 'react-router-dom'
import ApiContext from './ApiContext'
import config from './config'
import './Note.css'


class Note extends React.Component {
  static defaultProps ={
    onDeleteReview: () => {},
  }
  static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const reviewid = this.props.id
    const plantid = this.props.plantid
    fetch(`${config.API_ENDPOINT}/reviews/${reviewid}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
      })
      .then(() => {
        this.context.deleteReview(reviewid)
        // allow parent to perform extra behaviour
        this.props.onDeleteReview(reviewid)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { content, id, rating, } = this.props
    return (
      <div className='Note'>
        <h3 className='Review_content'>Review: </h3>
        {content}
        <h4 className='Review__ratings'>Rating: </h4> 
        {rating}
      </div>

    )
  }
}
export default Note;