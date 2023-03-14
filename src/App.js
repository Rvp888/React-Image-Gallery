import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './App.css';
import { dataBase, dbCollection } from "./Firebase";
import { getDocs, doc, deleteDoc } from "firebase/firestore";

function App() {

  const [images, setImages] = React.useState([]);
  const [searchedImages, setSearchedImages] = React.useState([]);
  const [searchedText, setSearchedText] = React.useState("");

  React.useEffect(() => {
    let imageArr = [];
    getDocs(dbCollection).then((res) => {
      imageArr = [...res.docs];
      imageArr = imageArr.map((ele) => {
        return {...ele.data(), id: ele.id };
      })
      setImages([...imageArr]);
    });  
  })

  function deleteImage(id) {
    console.log(id);
    let imageToDelete = doc(dataBase, 'photos', id);
    deleteDoc(imageToDelete);
  }

  function filterSearchedImages(text) {
    setSearchedText(text);
    let filteredImages = images.filter( (img) => img.tag.toLowerCase().includes(text.toLowerCase()) );
    setSearchedImages(filteredImages);
  }

  return (
    <div>
      <Header filterSearchedImages={filterSearchedImages} />
      <Main images={ searchedText ? searchedImages : images } deleteImage={deleteImage} />
      <Footer/>
    </div>
  );
}

export default App;
