export const findPlant = (plants=[], plantId) =>
  plants.find(plant => plant.id === plantId)

export const findNotes = (reviews=[], reviewId) =>
reviews.find(review => review.id === reviewId)

export const getNotesForPlant = (reviews=[], plantId) => (
  (!plantId)
    ? reviews
    : reviews.filter(review => review.plantId === plantId)
)