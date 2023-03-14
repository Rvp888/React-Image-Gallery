import React from "react";
import Upload from "./Upload";
import "../CSS/Main.css";

export default function Main(props) {

  const [showModal, setShowModal] = React.useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="main">
      <div className="uploadCont">
        <button className="showModalButton" onClick={() => setShowModal(true)}>
          Upload image
        </button>
      </div>
      {
        showModal && <Upload closeModal={closeModal} />
      }
      <div className="imageGrid">
        {
          props.images.map((img) => {
            return (
              <div key={img.id} className="image-div">
                <img src={img.filePath} className="image" />
                <h2>{img.tag}</h2>
                <button onClick={() => props.deleteImage(img.id)}>Remove</button>
              </div>              
            )
          })
        }
      </div>
    </div>
  );
}
