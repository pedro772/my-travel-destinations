import React from "react";
import {useState} from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Modal from "./components/Modal";
import data from "./data";

function App() {

  const [show, setShow] = useState(false);

  const cardData = data.map(item =>
    <Card
      key={item.id}
      {...item} />
  )

  function closeModal() {
    setShow(false);
  }

  const closeOnEscapeKeyDown = e => {
    return e.charCode || e.keyCode === 27 ? closeModal() : null;
  }

  React.useEffect(() => {
      document.body.addEventListener("keydown", closeOnEscapeKeyDown);

      return () => {
          document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
      }
  }, []);

  return (
    <div className="App">
      <Navbar />

      <button onClick={() => setShow(true)} className="show-modal">
        <img src="/images/add-icon.svg" alt="Ícone de adicionar" className="add-icon" />
        Adicionar novo destino
      </button>

      <Modal show={show} closeModal={closeModal} />

      <div className="cards">
        {cardData}
      </div>
    </div>
  );
}

export default App;
