import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Checkbox, Box } from "@material-ui/core";
import { Typography } from "../../components/Typography";
import { orange, green, indigo, grey } from "@material-ui/core/colors";
import { Grid } from "../../components/Grid";
import { EditNoteDialog } from "./EditNoteDialog";
import { DeleteNoteDialog } from "./DeleteNoteDialog";

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
    color: "white",
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 3,
    wordBreak: "break-all",
    overflow: "hidden",
  },
  titleContainer: {
    display: "flex",
    marginBottom: ".5rem",
  },
  bodyContainer: {
    minHeight: 110,
    maxHeight: 110,
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
      <Card className={root}>
        <CardContent style={{ width: "auto" }}>
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
              <Typography noWrap className={titleHandler}>
                {note.title}{" "}
              </Typography>
            </Grid>

            <Grid item xs={3}>
              <Grid container className={iconsHandler}>
                <EditNoteDialog note={note} editNote={editNote} />
                <DeleteNoteDialog handleDelete={handleDelete} />
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            className={bodyContainer}
            direction='column'
            justify='space-between'
          >
            <Typography
              className={descriptionHandler}
              variant='body2'
              component='p'
            >
              {note.description}
            </Typography>

            <Typography className={dateHandler} variant='body2' component='p'>
              {note.date}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
