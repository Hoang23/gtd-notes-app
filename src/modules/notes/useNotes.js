import { useState } from "react";
import { Items } from "../../constants.js";
import { getFilteredNotes, createNote, updateNote } from "./utils";
import moment from "moment";

export const useNotes = () => {
  const [notes, setNotes] = useState(Items);
  const [search, setSearch] = useState("");
  const [searchedNotes, setSearchedNotes] = useState([]);

  const searchNotes = (notes) => {
    setSearchedNotes(
      notes.filter((note) => {
        return (
          note.title.toLowerCase().includes(search.toLowerCase()) ||
          note.description.toLowerCase().includes(search.toLowerCase())
        );
      })
    );
  };

  const SortNotes = (notes) => {
    setNotes(
      // sort by date
      notes.sort((a, b) => {
        return moment(b.date).diff(a.date);
      }),

      // sort by completion
      notes.sort((a, b) => {
        return a.completed - b.completed;
      })
    );
  };

  const addNote = (note) => {
    const newNote = createNote(note);
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    const filteredNotes = getFilteredNotes(notes, id);
    setNotes(filteredNotes);
  };

  const deleteAllNotes = () => {
    setNotes([]);
  };

  const updateComplete = (id) => {
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          note.completed = !note.completed;
        }
        return note;
      })
    );
  };

  const editNote = (editedNote, id) => {
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          note.title = editedNote.title;
          note.category = editedNote.category;
          note.description = editedNote.description;
        }
        return note;
      })
    );
  };

  const countNotesCompleted = () => {
    let completedNotes = notes.filter((note) => note.completed === true);

    let completedCount = completedNotes.reduce((accumulator, _) => {
      return accumulator + 1;
    }, 0);

    return completedCount;
  };

  return {
    notes,
    setNotes,
    addNote,
    deleteNote,
    deleteAllNotes,
    editNote,
    updateComplete,
    SortNotes,
    countNotesCompleted,
    searchNotes,
    search,
    setSearch,
    searchedNotes,
    setSearchedNotes,
  };
};
