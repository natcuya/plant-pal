export const findPlant = (plants=[], plantid) =>
  plants.find(plant => plant.id === plantid)

export const findReview = (reviews=[], reviewid) =>
reviews.find(review => review.id === reviewid)

export const getReviewsForPlant = (reviews=[], plantid) => (
  (!plantid)
    ? reviews
    : reviews.filter(review => review.plantid=== Number(plantid))
)
export const countReviewsForPlant = (reviews=[], plantid) =>
  reviews.filter(review => review.plantid === Number(plantid)).length

export const findPlantByName = (plants=[], name) => plants.find(plant => plant.name === name);
