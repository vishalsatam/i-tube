import React, { useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Container, CircularProgress, Box, Typography } from '@mui/material';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoPlayerDialog from './VideoPlayerDialog';

const API_KEY = process.env.YOUTUBE_API_KEY;

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

const YouTubeSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [order, setOrder] = useState('relevance');
  const [videoDuration, setVideoDuration] = useState('any');
  const [videoDefinition, setVideoDefinition] = useState('any');

  const handleSearch = async (pageToken: string | null = null) => {
    if (!query) return;
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          q: query,
          type: 'video',
          order: order,
          videoDuration: videoDuration,
          videoDefinition: videoDefinition,
          key: API_KEY,
          maxResults: 9,
          pageToken: pageToken,
        },
      });
      setVideos((prevVideos) => [...prevVideos, ...response.data.items]);
      setNextPageToken(response.data.nextPageToken);
    } catch (error) {
      console.error('Error fetching data from YouTube API', error);
    }
  };

  const handleCardClick = (video: Video) => {
    setSelectedVideo(video);
  };

  const handleClose = () => {
    setSelectedVideo(null);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setVideos([]);
      setNextPageToken(null);
      handleSearch();
    }
  };

  return (
    <Container>
      <SearchBar
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
        handleKeyPress={handleKeyPress}
        order={order}
        setOrder={setOrder}
        videoDuration={videoDuration}
        setVideoDuration={setVideoDuration}
        videoDefinition={videoDefinition}
        setVideoDefinition={setVideoDefinition}
      />
      <InfiniteScroll
        dataLength={videos.length}
        next={() => handleSearch(nextPageToken)}
        hasMore={!!nextPageToken}
        loader={<Box display="flex" justifyContent="center" mt={2}><CircularProgress /></Box>}
        endMessage={<Typography align="center" variant="body2" color="textSecondary">No more videos</Typography>}
        style={{ overflow: 'hidden' }}
      >
        <VideoList videos={videos} handleCardClick={handleCardClick} />
      </InfiniteScroll>
      <VideoPlayerDialog selectedVideo={selectedVideo} handleClose={handleClose} />
    </Container>
  );
};

export default YouTubeSearch;
