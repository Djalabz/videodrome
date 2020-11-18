import React from 'react';
import './index.css';
import { useState } from 'react';
import axios from 'axios';
import AutoSuggest from '../AutoSuggest';


const SearchBar=(keyword, setKeyword) => {

  const omdbKey = process.env.REACT_APP_OMDB_APIKEY

  // getInfo = () => {
  //   axios.get(`http://www.omdbapi.com/?apikey=${omdbKey}&s=${keyword}`)
  //     .then(({ data }) => {
  //       this.setState({
  //         results: data.data // MusicGraph returns an object named data, 
  //                            // as does axios. So... data.data                             
  //       })
  //     })
  // }

  return (
  <div className='searchBar'>
     {/* <form action="">
        <input  type="text" placeholder="Search ..." onChange={(e) => setKeyword(e.target.value)}></input>
        <button className='search-main' type="submit" onSubmit={(e) => {
          e.prevent.default();          

        }}></button>
    </form> 
      <div className='results'></div> */}
      <AutoSuggest />
  </div>
  )
};


export default SearchBar;