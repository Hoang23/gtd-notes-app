import React, { useEffect } from "react";
import { Typography } from "../../components/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
  progressBar: {
    marginBottom: "1rem",
    marginTop: "1rem",
    width: "100%",
  },
});

export const ProgressSection = ({ notes, countNotesCompleted }) => {
  const { progressBar } = useStyles();

  const [progress, setProgress] = React.useState(0);

  const notesCompleted = countNotesCompleted();

  useEffect(() => {
    if (notes.length === 0) {
      setProgress(0);
    } else {
      const percentage = (notesCompleted / notes.length) * 100;
      setProgress(percentage);
    }
  }, [notes, notesCompleted]);

  return (
    <div>
      <Typography>
        You have completed {notesCompleted}/{notes.length} items{" "}
      </Typography>

      <LinearProgress
        className={progressBar}
        variant='determinate'
        value={progress}
      />
    </div>
  );
};
