import "./App.css";
import React, { useState } from "react";
import Header from "./header";
import Search from "./search";
import Cards from "./Cards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "reactstrap";
function App() {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const handleCards = (lod) => {
    const cards = items.map((card, i) => {
      let thumbnail = "";
      let publisher = "";
      let author = "";
      if (card.volumeInfo.imageLinks.thumbnail) {
        thumbnail =card.volumeInfo.imageLinks.thumbnail;
      }
      if (card.volumeInfo.publisher) {
        publisher =card.volumeInfo.publisher
      } else {
        publisher = 'Not Found'
      }
      if (card.volumeInfo.authors) {
        author =card.volumeInfo.authors;
      } else {
        author = "Author Not Found"
      }
      return (
        <div className="col-lg-6" key={card.id}>
          <Cards 
          thumbnail={thumbnail}
          title={card.volumeInfo.title}
          author={author}
          publisher={publisher}
          previewLink={card.volumeInfo.previewLink}
          ></Cards>
        </div>
      );
    });
    if (lod) {
      return (
        <div className="card-items d-flex justify-content-center mt-3">
          <Spinner style={{ width: "3rem", height: "3rem" }}></Spinner>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row"> {cards} </div>
        </div>
      );
    }
  };

  return (
    <div className='main-container w-100 h-100'>
      <ToastContainer></ToastContainer>
      <Header></Header>
      <Search
        loading={loading}
        setLoading={setLoading}
        items={items}
        setItems={setItems}
      ></Search>
      {handleCards(loading)}
    </div>
  );
}

export default App;
