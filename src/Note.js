import React from 'react'
import { Link } from 'react-router-dom'
import ApiContext from './ApiContext'
import config from './config'


class Note extends React.Component {
  static defaultProps ={
    onDeleteReview: () => {},
  }
  static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const reviewid = this.props.id
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
    const { content, id, rating } = this.props
    return (
      <div className='Note'>
        <h2 className='Note__title'>
          <Link to={`/reviews/${id}`}>
            {content}
          </Link>
        </h2>
        <button
          className='Note__delete'
          type='button'
          onClick={this.handleClickDelete}
        >
          {' '}
          remove
        </button>
        <div className='Note__dates'>
          <div className='Note__dates-modified'>
            Rating
            {' '}
            <span className='Date'>
              {rating}
            </span>
          </div>
        </div>
      </div>
    )
  }
}
export default Note;