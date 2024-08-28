import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEO_API} from '../utils/constants/'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
const VideoContainer = () => {
  const [videos,setVideos]=useState([])
  const dispatch=useDispatch();

  useEffect(()=>{
    getVideos();
  },[])

  const getVideos=async()=>{
    const resp=await fetch(YOUTUBE_VIDEO_API);
    const data=await resp.json();
    // console.log(data);
    setVideos(data.items); 
  }
  return (
    <div className='flex flex-wrap'>
      {videos.map((video)=>(
        <Link key={video.id} to={'/watch?v='+video.id}><VideoCard  info={video}/></Link> 
      ))}
      
    </div>
  )
}

export default VideoContainer;

