import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { blue, grey } from "@material-ui/core/colors";
import { Grid } from "../../components/Grid";
import EditIcon from "@material-ui/icons/Edit";

const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string(),
  category: yup.string(),
});

const useStyles = makeStyles((theme) => ({
  paperHandler: {
    position: "absolute",
    width: "850px",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    borderRadius: "4px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    [theme.breakpoints.down("sm")]: {
      width: 350,
    },
  },
  paperContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10vh",
  },
  titleInputField: {
    borderRadius: "4px",
    width: "90%",
    height: "40px",
    fontSize: 18,
    color: grey[700],
    backgroundColor: grey[200],
  },
  descriptionInputField: {
    borderRadius: "4px",
    width: "90%",
    height: "20vh",
    minHeight: "20vh",
    fontSize: 18,
    color: grey[700],
    backgroundColor: grey[200],
    maxWidth: "90%",
    maxHeight: "40vh",
    minWidth: "90%",
    marginTop: "2rem",
    fontFamily: "Roboto",
  },
  selectInputField: {
    borderRadius: "3px",
    width: "100%",
    height: "45px",
    fontSize: 18,
    color: grey[700],
    backgroundColor: grey[200],
  },
  formContainer: {
    display: "flex",
    alignItems: "center",
  },
  headerHandler: {
    borderBottom: "1px solid lightgrey",
    color: "grey",
    fontSize: 24,
  },
  errorHandler: {
    color: theme.palette.error.main,
  },
  buttonHandler: {
    color: blue[600],
  },
}));

export const EditNoteDialog = ({ note, editNote }) => {
  const {
    paperHandler,
    paperContainer,
    titleInputField,
    descriptionInputField,
    selectInputField,
    formContainer,
    headerHandler,
    errorHandler,
    buttonHandler,
  } = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    editNote(data, note.id);
    if (
      typeof errors.title === "undefined" ||
      typeof errors.category === "undefined" ||
      typeof errors.description === "undefined"
    ) {
      handleClose();
    }
  };

  return (
    <div>
      <EditIcon onClick={handleOpen} />
      <Modal open={open} onClose={handleClose}>
        <div className={paperContainer}>
          <div className={paperHandler}>
            <p className={headerHandler}>Edit Note</p>
            <form onSubmit={handleSubmit(submitForm)}>
              <Grid container className={formContainer}>
                <Grid xs={12} item className={errorHandler}>
                  <p> {errors.title?.message} </p>
                  <p> {errors.category?.message} </p>
                  <p> {errors.description?.message} </p>
                </Grid>
                <Grid item xs={8}>
                  <input
                    type='text'
                    name='title'
                    defaultValue={note.title}
                    ref={register}
                    className={titleInputField}
                  ></input>
                </Grid>

                <Grid item xs={4}>
                  <select
                    className={selectInputField}
                    name='category'
                    defaultValue={note.category}
                    ref={register}
                  >
                    <option value='Home'>Home</option>
                    <option value='Work'>Work</option>
                    <option value='Personal'>Personal</option>
                  </select>
                </Grid>

                <Grid item xs={8}>
                  <textarea
                    type='text'
                    name='description'
                    defaultValue={note.description}
                    ref={register}
                    className={descriptionInputField}
                  />
                </Grid>

                <Grid item xs={9} />

                <Grid item xs={3} align='right'>
                  <Button className={buttonHandler} onClick={handleClose}>
                    Cancel{" "}
                  </Button>
                  <Button className={buttonHandler} type='submit'>
                    Edit{" "}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};
