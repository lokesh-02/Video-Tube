import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
    // if(!isMenuOpen) return null;
  return (
    <>
    {
        isMenuOpen ? (<div className='p-5 shadow-lg w-48'>
            <ul>
                <Link to={'/'}><li>Home</li></Link>
                
                <li>Shorts</li>
                <li>Live</li>
                <li>Liked Videos</li>
            </ul>
            <h1 className='font-bold py-5'>Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <h1 className='font-bold py-5'>Watch Later</h1>
            <ul>
                <li>Mr Beast</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>) : null
    }
    </>
    
  )
}

export default SideBar