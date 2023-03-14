import React from 'react';
import Upload from './Upload';
import "../CSS/Main.css";

export default function Main() {
    const [showModal, setShowModal] = React.useState(false);

    const closeModal = () => {
        setShowModal(false);
    }

  return (
    <div className='main'>
      <button onClick={() => setShowModal(true)}>Upload image</button>
      {
        showModal && <Upload closeModal={closeModal} />
      }
    </div>
  )
}
