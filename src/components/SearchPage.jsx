// SearchPage.jsx
import React, { useState, useEffect } from 'react';
import Head from './Head';
import SearchVideoContainer from './SearchVideoContainer';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
    const [searchKw, setSearchKw] = useState('');

    return (
        <div>
            <Head setSearchKw={setSearchKw} />
            <SearchVideoContainer searchKw={searchKw} />
        </div>
    );
};

export default SearchPage;
