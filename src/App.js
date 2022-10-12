import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import FormModal from "./components/FormModal/FormModal";
import MessageModal from "./components/MessageModal/MessageModal";
import baseData from "./data";

function App() {
  // States
  const [data, setData] = useState(baseData);
  const [showForm, setShowForm] = useState(false);
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);
  const [cardToDelete, setCardToDelete] = useState(null);
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
      setShowDeleteMessage={setShowDeleteMessage}
      setCardToDelete={setCardToDelete}
      key={item.id}
      {...item} />
  )

  // Bloquear scroll quando o modal estiver sendo mostrado
  useEffect(() => {
    showForm ? document.body.style.overflow = "hidden" : document.body.style.overflow = 'unset'
  }, [showForm]);

  React.useEffect(() => {
      document.body.addEventListener("keydown", closeOnEscapeKeyDown);

      return () => {
          document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Funções relacionadas com fechar modal
  function closeModal() {
    setShowForm(false);
    setShowDeleteMessage(false);
    setEdit(false);
    resetForm();
  }

  const closeOnEscapeKeyDown = e => {
    return e.charCode || e.keyCode === 27 ? closeModal() : null;
  }
  
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

  function submitData(dataToAdd) {
    if(edit) {
      const indexedId = dataToAdd.id - 1;
      setData(prevData => {
        const newData = prevData;
        newData.splice(indexedId, 1, dataToAdd);
        return newData;
      });
    } else {
      dataToAdd = {
        ...dataToAdd,
        id: data.length + 1
      }

      const newData = data;
      newData.push(dataToAdd)

      setData(newData)
    }
    
    closeModal();
  }

  function editCard(id) {
    const indexedId = id - 1;
    setFormData(data[indexedId]);
    setShowForm(true);
  }

  function deleteCard(id) {
    setData(prevData => prevData.filter(item => item.id !== id));
  }

  return (
    <div className="app">
      <Navbar setShowForm={setShowForm} />
      <FormModal showForm={showForm} edit={edit} formData={formData} closeModal={closeModal} setFormData={setFormData} submitData={submitData} />
      <MessageModal showDeleteMessage={showDeleteMessage} closeModal={closeModal} deleteCard={deleteCard} cardToDelete={cardToDelete} />

      <div className="container">
        <div className="cards">
          {cardData}
        </div>
      </div>
    </div>
  );
}

export default App;
