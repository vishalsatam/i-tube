import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

interface VideoListProps {
  videos: Video[];
  handleCardClick: (video: Video) => void;
}

const VideoList: React.FC<VideoListProps> = ({ videos, handleCardClick }) => {
  return (
    <Grid container spacing={4} style={{ marginTop: '20px' }}>
      {videos.map((video) => (
        <Grid item key={video.id.videoId} xs={12} sm={6} md={4}>
          <Card 
            onClick={() => handleCardClick(video)} 
            sx={{ cursor: 'pointer', '&:hover': { cursor: 'pointer' } }}
          >
            <CardMedia
              component="img"
              alt={video.snippet.title}
              height="140"
              image={video.snippet.thumbnails.medium.url}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {video.snippet.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {video.snippet.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default VideoList;
