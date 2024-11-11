import React from 'react';
import { TextField, Button, Grid, InputAdornment, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
  handleSearch: () => void;
  handleKeyPress: (event: React.KeyboardEvent) => void;
  order: string;
  setOrder: (order: string) => void;
  videoDuration: string;
  setVideoDuration: (duration: string) => void;
  videoDefinition: string;
  setVideoDefinition: (definition: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  query,
  setQuery,
  handleSearch,
  handleKeyPress,
  order,
  setOrder,
  videoDuration,
  setVideoDuration,
  videoDefinition,
  setVideoDefinition,
}) => {
  return (
    <Grid container spacing={2} justifyContent="center" style={{ marginTop: '20px' }}>
      <Grid item xs={12} md={8}>
        <TextField
          fullWidth
          variant="outlined"
          label="Search for videos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button onClick={() => { handleSearch(); }} color="primary">
                  <SearchIcon />
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Order</InputLabel>
          <Select
            value={order}
            onChange={(e) => setOrder(e.target.value as string)}
            label="Order"
          >
            <MenuItem value="relevance">Relevance</MenuItem>
            <MenuItem value="date">Date</MenuItem>
            <MenuItem value="viewCount">View Count</MenuItem>
            <MenuItem value="rating">Rating</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={4}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Duration</InputLabel>
          <Select
            value={videoDuration}
            onChange={(e) => setVideoDuration(e.target.value as string)}
            label="Duration"
          >
            <MenuItem value="any">Any</MenuItem>
            <MenuItem value="short">Short (&lt; 4 minutes)</MenuItem>
            <MenuItem value="medium">Medium (4-20 minutes)</MenuItem>
            <MenuItem value="long">Long (&gt; 20 minutes)</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={4}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Definition</InputLabel>
          <Select
            value={videoDefinition}
            onChange={(e) => setVideoDefinition(e.target.value as string)}
            label="Definition"
          >
            <MenuItem value="any">Any</MenuItem>
            <MenuItem value="high">High</MenuItem>
            <MenuItem value="standard">Standard</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
