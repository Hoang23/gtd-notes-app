import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Select, MenuItem, TextField } from "@material-ui/core";
import { Button } from "../../components/Button";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { blue, grey } from "@material-ui/core/colors";
import { Grid } from "../../components/Grid";
import { motion } from "framer-motion";

const schema = yup.object().shape({
  title: yup
    .string()
    .required()
    .max(50, "title must be less than 50 characters"),
  description: yup.string(),
  category: yup.string(),
});

const useStyles = makeStyles((theme) => ({
  paper: {
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
  addNoteModal: {
    backgroundColor: blue[400],
    color: "white",
  },
  titleInputField: {
    borderRadius: "4px",
    width: "90%",
    color: grey[700],
    backgroundColor: grey[200],
    fontSize: 18,

    borderBottom: "none",
  },
  descriptionInputField: {
    color: grey[700],
    backgroundColor: grey[200],
    width: "90%",
    borderRadius: "4px",
    marginTop: "2rem",
    fontSize: 18,
  },

  selectInputField: {
    borderRadius: "4px",
    width: "100%",
    color: grey[700],
    backgroundColor: grey[200],
    fontSize: 18,
  },
  formContainer: {
    display: "flex",
    alignItems: "center",
  },
  headerText: {
    borderBottom: "1px solid lightgrey",
    color: "grey",
    fontSize: 24,
  },
  errorText: {
    color: theme.palette.error.main,
  },
  buttonText: {
    color: blue[600],
  },
}));

export const AddNoteDialog = ({ addNote }) => {
  const {
    paper,
    paperContainer,
    addNoteModal,
    titleInputField,
    descriptionInputField,
    selectInputField,
    formContainer,
    errorText,
    buttonText,
  } = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { register, handleSubmit, control, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    addNote(data);
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
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, delay: 3 }}
      >
        <Button type='button' onClick={handleOpen} className={addNoteModal}>
          + Add Note
        </Button>
      </motion.div>

      <Modal open={open} onClose={handleClose}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={paperContainer}>
            <div className={paper}>
              <p>Add Note</p>
              <form onSubmit={handleSubmit(submitForm)}>
                <Grid container className={formContainer}>
                  <Grid xs={12} item className={errorText}>
                    <p> {errors.title?.message} </p>
                    <p> {errors.category?.message} </p>
                    <p> {errors.description?.message} </p>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      inputProps={{
                        style: { paddingLeft: "1rem" },
                      }}
                      name='title'
                      placeholder='Title...'
                      inputRef={register}
                      className={titleInputField}
                    ></TextField>
                  </Grid>

                  <Grid item xs={4}>
                    <Controller
                      as={Select} // same as Material UI Select
                      style={{
                        paddingLeft: "1rem",
                      }}
                      className={selectInputField}
                      control={control}
                      name='category'
                      defaultValue={"Home"}
                    >
                      <MenuItem value='Home'>Home</MenuItem>
                      <MenuItem value='Work'>Work</MenuItem>
                      <MenuItem value='Personal'>Personal</MenuItem>
                    </Controller>
                  </Grid>

                  <Grid item xs={8}>
                    <TextField
                      multiline
                      inputProps={{
                        style: { paddingLeft: "1rem" },
                      }}
                      rows={9}
                      name='description'
                      placeholder='Description...'
                      inputRef={register}
                      className={descriptionInputField}
                    />
                  </Grid>

                  <Grid item xs={9} />

                  <Grid item xs={3} align='right'>
                    <Button className={buttonText} onClick={handleClose}>
                      Cancel{" "}
                    </Button>
                    <Button className={buttonText} type='submit'>
                      Add{" "}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>
        </motion.div>
      </Modal>
    </div>
  );
};
