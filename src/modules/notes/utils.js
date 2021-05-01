import moment from "moment";

export const getFilteredNotes = (notes, id) =>
  notes.filter((note) => note.id !== id);

export const createNote = (note) => {
  const id = Math.floor(Math.random() * 10000) + 1;
  const date = moment().format("ll");
  // use new Date() later on for sorting purposes and use moment for rendering later on
  const newNote = { id, date, completed: false, ...note };
  return newNote;
};

export const updateNote = (notes, editedNote, id) => {
  notes.map((note) => {
    if (note.id === id) {
      note.title = editedNote.title;
      note.category = editedNote.category;
      note.description = editedNote.description;
    }
    return note;
  });
  return notes;
};
