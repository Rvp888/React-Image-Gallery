import React from "react";
import Upload from "./Upload";
import "../CSS/Main.css";
import { dataBase } from "../Firebase";
import { getDocs } from "firebase/firestore";

export default function Main() {
  const [showModal, setShowModal] = React.useState(false);
  const [images, setImages] = React.useState([]);

  const closeModal = () => {
    setShowModal(false);
  };

  React.useEffect(() => {
    let imageArr = [];
    getDocs(dataBase.images).then((res) => {
      imageArr = [...res.docs];
      imageArr = imageArr.map((ele) => {
        return ele.data();
      })
      setImages([...imageArr]);
    });
    
  },[])

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
          images.map((ele) => {
            return (
              <img key={ele.id} src={ele.filePath} height="200px" width="200px" />
            )
          })
        }
      </div>
    </div>
  );
}
