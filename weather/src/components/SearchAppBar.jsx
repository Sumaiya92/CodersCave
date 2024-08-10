import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useStateContext } from '../Context';

const SearchAppBar = () => {
  const [search, setSearch] = useState('');
  const { setCity } = useStateContext();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      setCity(search.trim());
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearchSubmit(e);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSearchSubmit}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-helperText"
        label="Search"
        value={search}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
      />
    </Box>
  );
};

export default SearchAppBar;
