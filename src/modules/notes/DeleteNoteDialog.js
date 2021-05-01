import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";
import { Button } from "../../components/Button";
import { blue } from "@material-ui/core/colors";
import { Typography } from "../../components/Typography";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "20%",

    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
  },
  paperContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "40vh",
  },
  actionButton: {
    color: blue[600],
  },
}));

export const DeleteNoteDialog = ({ handleDelete }) => {
  const { paper, paperContainer, actionButton } = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <DeleteIcon onClick={handleOpen} />
      <Modal open={open} onClose={handleClose}>
        <div className={paperContainer}>
          <div className={paper}>
            <Typography>Delete Note?</Typography>
            <Button onClick={handleClose} className={actionButton}>
              {" "}
              Cancel{" "}
            </Button>
            <Button onClick={handleDelete} className={actionButton}>
              {" "}
              Delete{" "}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
