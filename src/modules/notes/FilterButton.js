import React from "react";
import { Button } from "../../components/Button";
import { makeStyles } from "@material-ui/core/styles";
import { orange, green, indigo, blue } from "@material-ui/core/colors";

const useStyles1 = makeStyles({
  buttonAllActive: {
    backgroundColor: blue[400],
    color: "white",
  },
  buttonHomeActive: { backgroundColor: orange[400], color: "white" },
  buttonWorkActive: { backgroundColor: indigo[400], color: "white" },
  buttonPersonalActive: { backgroundColor: green[400], color: "white" },

  dotHome: { color: orange[400], fontSize: "20px" },
  dotWork: { color: indigo[400], fontSize: "20px" },
  dotPersonal: { color: green[400], fontSize: "20px" },
});

export const FilterButton = ({ onClick, isActive, category, children }) => {
  const styles = useStyles1(category);

  return (
    <div>
      <Button
        onClick={onClick}
        className={isActive && styles[`button${category}Active`]}
      >
        {children}
        {category !== "All" ? (
          <span className={styles[`dot${category}`]}> &bull;</span>
        ) : (
          ""
        )}
      </Button>
    </div>
  );
};
