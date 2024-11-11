import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { Dialog, DialogContent } from '@mui/material';

interface VideoPlayerDialogProps {
  selectedVideo: {
    id: { videoId: string };
  } | null;
  handleClose: () => void;
}

const VideoPlayerDialog: React.FC<VideoPlayerDialogProps> = ({ selectedVideo, handleClose }) => {
  return (
    <Dialog open={!!selectedVideo} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogContent>
        {selectedVideo && (
          <ReactPlayer url={`https://www.youtube.com/watch?v=${selectedVideo.id.videoId}`} controls width="100%" />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default VideoPlayerDialog;
