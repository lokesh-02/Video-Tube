// SearchVideoContainer.jsx
import React, { useEffect, useState } from 'react';
import { YOUTUBE_SEARCH_RESULTS_API } from '../utils/constants';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';

const SearchVideoContainer = ({ searchKw }) => {
    const [searchVideos, setSearchVideos] = useState([]);

    useEffect(() => {
        if (searchKw) {
            getSearchVideos();
        }
    }, [searchKw]);

    const getSearchVideos = async () => {
        const resp = await fetch(YOUTUBE_SEARCH_RESULTS_API + searchKw);
        const data = await resp.json();
        setSearchVideos(data.items);
    };

    return (
        <div className='flex flex-wrap'>
            {searchVideos.map((video) => (
                <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
                    <VideoCard info={video} />
                </Link>
            ))}
        </div>
    );
};

export default SearchVideoContainer;
