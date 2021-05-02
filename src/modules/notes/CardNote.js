import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Checkbox } from "@material-ui/core";
import { Typography } from "../../components/Typography";
import { orange, green, indigo, grey } from "@material-ui/core/colors";
import { Grid } from "../../components/Grid";
import { EditNoteDialog } from "./EditNoteDialog";
import { DeleteNoteDialog } from "./DeleteNoteDialog";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 180,
    maxHeight: 180,
    backgroundColor: (note) =>
      note.completed === true
        ? grey[600]
        : note.category === "Home"
        ? orange[400]
        : note.category === "Work"
        ? indigo[400]
        : green[400],
    color: "white",
    boxShadow: "0px 3px 6px #00000029",
    textDecoration: (note) => (note.completed === true ? "line-through" : ""),
  },
  titleHandler: {
    fontSize: 20,
    color: "white",
  },
  descriptionHandler: {
    fontSize: 14,
    marginBottom: 12,
    color: "white",
  },
  titleContainer: {
    display: "flex",
    marginBottom: ".5rem",
  },
  bodyContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "100%",
  },
  dateHandler: {
    fontSize: 15,
    color: "white",
  },
  checkboxHandler: {
    color: "white",
    border: "none",
    padding: 0,
    opacity: "0.6",
  },
  iconsHandler: {
    fontSize: "1.3rem",
    display: "flex",
    justifyContent: "flex-end",
    opacity: "0.6",
    "&:hover": {
      cursor: "pointer",
    },
  },
});

export const CardNote = ({
  note,
  deleteNote,
  editNote,
  updateComplete,
  index,
}) => {
  const {
    root,
    titleHandler,
    descriptionHandler,
    titleContainer,
    bodyContainer,
    dateHandler,
    checkboxHandler,
    iconsHandler,
  } = useStyles(note);

  const handleToggleComplete = (id) => {
    updateComplete(note.id);
  };

  const handleDelete = (id) => {
    deleteNote(note.id);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 + index / 2 }}
      >
        <Card className={root}>
          <CardContent>
            <Grid container className={titleContainer} justify='space-between'>
              <Grid item xs={1}>
                <Checkbox
                  color='default'
                  className={checkboxHandler}
                  checked={note.completed}
                  onChange={handleToggleComplete}
                />
              </Grid>

              <Grid item xs={8}>
                <Typography className={titleHandler}>{note.title} </Typography>
              </Grid>

              <Grid item xs={3}>
                <Grid container className={iconsHandler}>
                  <EditNoteDialog note={note} editNote={editNote} />
                  <DeleteNoteDialog handleDelete={handleDelete} />
                </Grid>
              </Grid>
            </Grid>

            <Grid className={bodyContainer}>
              <Typography className={descriptionHandler}>
                {note.description}
              </Typography>
              <Typography className={dateHandler} variant='body2' component='p'>
                {note.date}
              </Typography>
            </Grid>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};
