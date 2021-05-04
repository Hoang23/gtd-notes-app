import React, { useState, useEffect, useMemo } from "react";
import { Grid } from "../../components/Grid";
import { CardNote } from "./CardNote";
import { AddNoteDialog } from "./AddNoteDialog";
import { FilterPanel } from "./FilterPanel";
import { useNotes } from "./useNotes";
import { ProgressSection } from "./ProgressSection";
import { SearchBar } from "./SearchBar";
import { DeleteAllNotesButton } from "./DeleteAllNotesButton";
import { EmptyNotesAssistance } from "./EmptyNotesAssistance";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  ActionButtons: {
    display: "flex",
    justifyContent: "flex-end",

    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start",
    },
  },
}));

export const Notes = () => {
  const [category, setCategory] = useState("All");

  const { ActionButtons } = useStyles();

  const {
    notes,
    setNotes,
    addNote,
    updateComplete,
    deleteNote,
    deleteAllNotes,
    editNote,
    SortNotes,
    countNotesCompleted,
    search,
    searchNotes,
    setSearch,
    searchedNotes,
  } = useNotes();

  useEffect(() => {
    searchNotes(notes);
  }, [search, notes]);

  useEffect(() => {
    const data = localStorage.getItem("test-notes");
    if (data) {
      setNotes(JSON.parse(data));
    }
  }, []); // will trigger only once, after initial render but if you remove empty array, it will trigger effect every time component renders

  useEffect(() => {
    localStorage.setItem("test-notes", JSON.stringify(notes));
  });

  useMemo(() => {
    SortNotes(notes);
  }, [notes]);

  let transitionTime = 0.2;

  localStorage.clear();

  return (
    <>
      <SearchBar setSearch={setSearch} /> <br />
      <Grid container justify='space-between' alignItems='center' spacing={3}>
        <Grid item xs={12} sm={8}>
          <FilterPanel onCategoryChange={setCategory} category={category} />
        </Grid>
        <Grid container item spacing={1} sm={4} className={ActionButtons}>
          <Grid item>
            <DeleteAllNotesButton deleteAllNotes={deleteAllNotes} />
          </Grid>

          <Grid item>
            <AddNoteDialog addNote={addNote} />
          </Grid>
        </Grid>
      </Grid>
      <br />
      <ProgressSection
        countNotesCompleted={countNotesCompleted}
        notes={notes}
      />
      <br />
      <Grid container spacing={3}>
        {searchedNotes.map((note, index) =>
          note.category === category ? (
            <Grid item xs={12} sm={6} key={note.id}>
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: (transitionTime += 0.2) }}
              >
                <CardNote
                  updateComplete={updateComplete}
                  deleteNote={deleteNote}
                  editNote={editNote}
                  note={note}
                  index={index}
                />
              </motion.div>
            </Grid>
          ) : category === "All" ? (
            <Grid item xs={12} sm={6} key={note.id}>
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: (transitionTime += 0.2) }}
              >
                <CardNote
                  updateComplete={updateComplete}
                  deleteNote={deleteNote}
                  editNote={editNote}
                  note={note}
                  index={index}
                />
              </motion.div>
            </Grid>
          ) : (
            ""
          )
        )}
      </Grid>
      <br /> <br />
      <Grid container justify='center'>
        {notes.length === 0 ? <EmptyNotesAssistance /> : ""}
      </Grid>
    </>
  );
};
