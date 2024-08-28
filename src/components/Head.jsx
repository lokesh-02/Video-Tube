import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
import { useNavigate } from 'react-router-dom';
import VideoContainer from './VideoContainer';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector(store => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const handleBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 100);
  };

  const getSearchSuggestions = async () => {
    const resp = await fetch(`https://cors-anywhere.herokuapp.com/${YOUTUBE_SEARCH_API}${searchQuery}`);
    const data = await resp.json();
    setSuggestions(data[1]);
    dispatch(cacheResults({ [searchQuery]: data[1] }));
  };


  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-md '>
      <div className='flex col-span-1'>
        <img 
          onClick={() => dispatch(toggleMenu())}
          className='h-8 cursor-pointer' 
          src='https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg' 
          alt='menu'
        />
        <a className='cursor-pointer' href='/'>
          <img 
            className='h-8 mx-3' 
            src='https://i.pinimg.com/564x/22/e4/e0/22e4e079c332b3f3589f4a8b73545076.jpg' 
            alt='yt-logo'
          />
        </a>
      </div>
      <div>
        <div>
          <input 
            className='w-96 border border-gray-950 rounded-l-full'
            type='text' 
            placeholder='search'
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={handleBlur}
          />
          <button className='bg-slate-400 rounded-r-full'>🔍</button>
          {showSuggestions && (
            <div className='fixed bg-white px-2 py-2 font-bold w-[24rem] rounded-lg shadow-lg border border-gray-200'>
              <ul>
                {   
                  suggestions.map((suggestionItem) => (
                    <li 
                      // onMouseDown={() => handleSuggestionClick(suggestionItem)}
                      key={suggestionItem}
                      className='hover:shadow-lg hover:bg-gray-100 px-2 py-1 border border-gray-50 rounded-lg'>
                      {suggestionItem}
                    </li>
                  ))
                }
              </ul>
            </div>
          )}
        </div>
      </div>
      <div>
        <img 
          className='h-8'  
          src='https://cdn-icons-png.flaticon.com/512/3682/3682281.png' 
          alt='user-icon'
        />
      </div>            
    </div>
  );
};

export default Head;
