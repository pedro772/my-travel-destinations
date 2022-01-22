import React from "react";
import {useState} from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Modal from "./components/Modal";
import data from "./data";

function App() {

  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    location: "",
    googleMapsUrl: "",
    startDate: "",
    endDate: "",
    description: "",
    imageUrl: ""
  });

  const cardData = data.map(item =>
    <Card
      key={item.id}
      {...item} />
  )

  function resetForm() {
    setFormData({
      id: null,
      title: "",
      location: "",
      googleMapsUrl: "",
      startDate: "",
      endDate: "",
      description: "",
      imageUrl: ""
    });
  }

  function closeModal() {
    setShow(false);
    resetForm();
  }

  function submitData(dataToAdd) {
    dataToAdd = {
      ...dataToAdd,
      id: data.length + 1
    }
    data.push(dataToAdd);

    closeModal();
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
        <h3 className="add-text">Adicionar novo destino</h3>
      </button>

      <Modal show={show} formData={formData} closeModal={closeModal} setFormData={setFormData} submitData={submitData} />

      <div className="cards">
        {cardData}
      </div>
    </div>
  );
}

export default App;
