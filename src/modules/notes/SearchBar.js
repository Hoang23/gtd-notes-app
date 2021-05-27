import React from "react";
import { InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    width: "100%",
    boxShadow: "0px 3px 6px #00000029",
    background: "white",
  },
  iconsHolder: {
    opacity: "0.6",
  },
}));

export const SearchBar = ({ setSearch }) => {
  const { searchBar, iconsHolder } = useStyles();

  return (
    <div>
      <TextField
        boxShadow={3}
        variant='outlined'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon className={iconsHolder} />
            </InputAdornment>
          ),
        }}
        placeholder='Search Notes...'
        onChange={(e) => setSearch(e.target.value)}
        className={searchBar}
      />
    </div>
  );
};
