import React from 'react';
import "../CSS/Upload.css";

export default function Upload(props) {

    const handleUpload = (e) => {
        console.log(e.target.file[0]);
    }

  return (
    <div className='uploadModal'>
      <h1>
        Upload Image
      </h1>
      <input type='file' className='imgInput' onChange={handleUpload} accept='image/*' />
      <input type='text' className='tagInput' placeholder='Give a tag to image' />
      <button className='uploadBtn' >Upload</button>
      <button className='closeBtn' onClick={props.closeModal} >Close</button>
    </div>
  )
}
