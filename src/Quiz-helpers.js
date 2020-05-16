export const findPlant = (plants=[], plantId) =>
  plants.find(plant => plant.id === plantId)

export const findNotes = (notes=[], noteId) =>
notes.find(note => note.id === noteId)

export const getNotesForPlant = (notes=[], plantId) => (
  (!plantId)
    ? notes
    : notes.filter(note => note.plantId === plantId)
)