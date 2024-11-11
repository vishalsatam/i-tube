import React from 'react';
import YouTubeSearch from './components/YouTubeSearch';
import { CssBaseline, Container, Typography } from '@mui/material';

const App: React.FC = () => {
  return (
    <div className="App">
      <CssBaseline />
      <Container>
        <Typography variant="h3" component="h1" gutterBottom>
          YouTube Video Search
        </Typography>
        <YouTubeSearch />
      </Container>
    </div>
  );
};

export default App;
