import React from 'react'

export default React.createContext({
  plants: [],
  reviews: [],
  addReview: () => {},
  deleteReview: () => {},
})