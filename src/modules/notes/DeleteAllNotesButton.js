import React, { useState } from "react";
import { Button } from "../../components/Button";
import { makeStyles } from "@material-ui/core/styles";
import { red, blue } from "@material-ui/core/colors";
import { Typography } from "../../components/Typography";
import { Modal } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  buttonHolder: {
    backgroundColor: red[400],
    color: "white",
  },
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

export const DeleteAllNotesButton = ({ deleteAllNotes }) => {
  const { buttonHolder, paper, paperContainer, actionButton } = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button className={buttonHolder} onClick={handleOpen}>
        Clear Notes
      </Button>

      <Modal open={open} onClose={handleClose}>
        <div className={paperContainer}>
          <div className={paper}>
            <Typography>Delete All Notes?</Typography>
            <Button onClick={handleClose} className={actionButton}>
              {" "}
              Cancel{" "}
            </Button>
            <Button
              onClick={() => {
                deleteAllNotes();
                handleClose();
              }}
              className={actionButton}
            >
              {" "}
              Delete{" "}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
