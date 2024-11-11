import React from 'react';
import { Grid } from '@mui/material';
import VideoCard from './VideoCard';

interface VideoListProps {
  videos: Array<{
    id: { videoId: string };
    snippet: {
      title: string;
      description: string;
      thumbnails: { medium: { url: string } };
    };
  }>;
  handleCardClick: (video: any) => void;
}

const VideoList: React.FC<VideoListProps> = ({ videos, handleCardClick }) => {
  return (
    <Grid container spacing={4} style={{ marginTop: '20px' }}>
      {videos.map((video) => (
        <Grid item key={video.id.videoId} xs={12} sm={6} md={4}>
          <VideoCard video={video} onClick={() => handleCardClick(video)} />
        </Grid>
      ))}
    </Grid>
  );
};

export default VideoList;
