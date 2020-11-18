import React from 'react';
import './index.css';
import Header from '../Header/'
import Main from '../Main'
import SearchBar from '../SearchBar';
import Map from '../Map'


const Homepage=() => {
  return (
<div className="homepage">
    <Header>
    </Header>
    {/* <Main>
    </Main> */}
    {/* <SearchBar /> */}
    <Map>
    </Map>
</div>
  )
};


export default Homepage;