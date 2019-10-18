import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Artist from '../artist/artist.component';

import './artist-list.styles.css';

const ArtistList = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchFunc = async () => {
      const response = await axios('http://jsonplaceholder.typicode.com/users');
      setArtists(response.data);
    }
    fetchFunc();
  }, []);
  

  return (
    <div className='artist-list'>
      <h1>LIST OF ALL ARTISTS IN CHOCOLATE CITY</h1>
      {
        <Artist artists={artists} />
      }
    </div>
  )
};

export default ArtistList;
