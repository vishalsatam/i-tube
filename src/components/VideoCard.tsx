import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface VideoCardProps {
  video: {
    id: { videoId: string };
    snippet: {
      title: string;
      description: string;
      thumbnails: { medium: { url: string } };
    };
  };
  onClick: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onClick }) => {
  return (
    <Card onClick={onClick} sx={{ cursor: 'pointer', '&:hover': { cursor: 'pointer' } }}>
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
  );
};

export default VideoCard;
