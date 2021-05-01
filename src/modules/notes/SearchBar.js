import React from "react";
import { Input, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    width: "100%",
  },
  iconsHolder: {
    opacity: "0.6",
  },
}));

export const SearchBar = ({ setSearch }) => {
  const { searchBar, iconsHolder } = useStyles();

  return (
    <div>
      {/* change to TextField */}
      <Input
        id='input-with-icon-adornment'
        startAdornment={
          <InputAdornment position='start'>
            <SearchIcon className={iconsHolder} />
          </InputAdornment>
        }
        placeholder='Search Notes...'
        onChange={(e) => setSearch(e.target.value)}
        className={searchBar}
      />
    </div>
  );
};
