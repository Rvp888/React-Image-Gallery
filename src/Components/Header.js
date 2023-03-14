import React from 'react';
import "../CSS/Header.css";


export default function Header(props) {

    function handleSearch (e) {
        let searchText = e.target.value;
        console.log(searchText);
        props.filterSearchedImages(searchText);
    }

  return (
    <div className='header'>
      <h1>Image Gallery</h1>
      <input className='search-bar' onChange={handleSearch} type="search" placeholder='Search an image...' />
    </div>
  )
}
