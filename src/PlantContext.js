import React, { Component } from 'react'

  
  const PlantContext = React.createContext({
      plant: [],
      reviews:[],
      pageUpdate: () => { },
      setPlant: () => {},
      setReviews: () => {},
      addReview: () => {},
  })

  export default PlantContext
  