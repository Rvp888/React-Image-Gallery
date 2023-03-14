import React from 'react';
import "../CSS/Header.css";


export default function Header() {
    const [searchText, setSearchText] = React.useState('');

    function func (e) {
        console.log(e.target.value);
    }

  return (
    <div className='header'>
      <h1>Image Gallery</h1>
      <input className='search-bar' onChange={func} type="search" placeholder='Search an image...' />
    </div>
  )
}
