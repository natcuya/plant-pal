import React from 'react'
import Note from '../Note'
import ApiContext from '../ApiContext'
//import './NotePageMain.css'
import config from '../config';

export default class ReviewPageMain extends React.Component {
  state = {
    review: ''
  }
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  componentDidMount() {
    const { reviewid } = this.props.match.params
    fetch(`${config.API_ENDPOINT}/reviews/${reviewid}`)
      .then(res => {
        if(!res){
          return res.json().then(e=> Promise.reject(e));
        }
        return res.json();
      })
      .then(review => {
        this.setState({review})
      })
      .catch(error => {
        console.error({error})
      })
  }

  handleDeleteReview = reviewid => {
    console.log('handledeletereview function')
    this.props.history.push(`/`)
  }

  render() {
    let review = this.state.review;
    return (
      <section className='NotePageMain'>
        <Note
          id={review.id}
          rating={review.rating}
          onDeleteReview={this.handleDeleteReview}
        />
        <div className='NotePageMain__content'>
          <p>{review.content}</p>
          {/* {note.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )} */}
        </div>
      </section>
    )
  }
}