import React from "react";
import { Grid } from "../../components/Grid";
import { FilterButton } from "./FilterButton";

export const FilterPanel = ({ category, onCategoryChange }) => {
  return (
    <div>
      <Grid container alignItems='center'>
        <Grid item xs={3} sm={2}>
          <FilterButton
            onClick={() => onCategoryChange("All")}
            isActive={category === "All"}
            category='All'
          >
            All
          </FilterButton>
        </Grid>

        <Grid item>
          <FilterButton
            onClick={() => onCategoryChange("Home")}
            isActive={category === "Home"}
            category='Home'
          >
            Home
          </FilterButton>
        </Grid>

        <Grid item>
          <FilterButton
            onClick={() => onCategoryChange("Work")}
            isActive={category === "Work"}
            category='Work'
          >
            Work
          </FilterButton>
        </Grid>

        <Grid item>
          <FilterButton
            onClick={() => onCategoryChange("Personal")}
            isActive={category === "Personal"}
            category='Personal'
          >
            Personal
          </FilterButton>
        </Grid>
      </Grid>
    </div>
  );
};
