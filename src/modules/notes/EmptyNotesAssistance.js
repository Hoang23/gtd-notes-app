import React from "react";
import addNoteIllustration from "../../assets/add-note-illustration.svg";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import { Typography } from "../../components/Typography";

const useStyles = makeStyles((theme) => ({
  Heading: {
    color: grey[600],
  },
}));

export const EmptyNotesAssistance = () => {
  const { Heading } = useStyles();
  return (
    <div>
      <Typography className={Heading} variant='h4' gutterBottom>
        You don't have any notes
      </Typography>
      <br /> <br />
      <img src={addNoteIllustration} alt='' />
    </div>
  );
};
