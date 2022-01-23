import React from "react";
import {useState} from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Modal from "./components/Modal";
import data from "./data";

function App() {
  // States
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
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

  // Create Card components
  const cardData = data.map(item =>
    <Card
      editCard={editCard}
      setEdit={setEdit}
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
    setEdit(false);
    resetForm();
  }

  function submitData(dataToAdd) {
    if(edit) {
      const indexedId = dataToAdd.id - 1;
      data.splice(indexedId, 1, dataToAdd);
    } else {
      dataToAdd = {
        ...dataToAdd,
        id: data.length + 1
      }
      data.push(dataToAdd);
    }
    

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

  function editCard(id) {
    const indexedId = id - 1;
    setFormData(data[indexedId]);
    setShow(true);
  }

  return (
    <div className="App">
      <Navbar />

      <button onClick={() => setShow(true)} className="show-modal">
        <img src="/images/add-icon.svg" alt="Ícone de adicionar" className="add-icon" />
        <h3 className="add-text">Adicionar novo destino</h3>
      </button>

      <Modal show={show} edit={edit} formData={formData} closeModal={closeModal} setFormData={setFormData} submitData={submitData} />

      <div className="cards">
        {cardData}
      </div>
    </div>
  );
}

export default App;
