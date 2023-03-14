import React from "react";
import "../CSS/Upload.css";
import { storage, dataBase } from "../Firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { addDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

export default function Upload(props) {

  const [tag, setTag] = React.useState('');
  const [imageURL, setImageURL] = React.useState('');

  const handleUpload = (e) => {
    // console.log(e.target.files[0]);
    let file = e.target.files[0];
    const imageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(imageRef, file);
    // f1 - progress, f2 - error, f3 - completion
    uploadTask.on("state_changed", f1, f2, f3)
    function f1(snapshot) {
      const progress =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
    }
    function f2(error) {
      console.log(error);
    }  
    function f3(completion) {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        setImageURL(downloadURL);
      });
    }
    
  };

  const uploadImage = (e) => {
    let obj = {
      id: uuidv4(),
      filePath: imageURL,
      tag: tag
    }
    addDoc(dataBase.images, obj).then(() => {
      console.log('image uploaded  successfully');
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="uploadModal">
      <h1>Upload Image</h1>
      <input
        type="file"
        className="imgInput"
        onChange={handleUpload}
        accept="image/*"
      />
      <input
        type="text"
        className="tagInput"
        onChange={(e) => setTag(e.target.value)}
        placeholder="Give a tag to image"
      />
      <button className="uploadBtn" onClick={uploadImage}>Upload</button>
      <button className="closeBtn" onClick={props.closeModal}>
        Close
      </button>
    </div>
  );
}
