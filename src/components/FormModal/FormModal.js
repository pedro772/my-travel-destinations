import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./formModal.css";

export default function FormModal(props) {

    function handleClick() {
        props.closeModal();
    }

    function handleChanges(e) {
        const {name, value} = e.target;
        const setFormData = props.setFormData;

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    function formatDate(date) {
      return new Date(date).toLocaleString("pt-BR", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    }

    function handleSubmit() {
      props.formData.startDate = formatDate(props.formData.startDate);
      props.formData.endDate = formatDate(props.formData.endDate);

      props.submitData(props.formData);
    }

    return ReactDOM.createPortal(
        <CSSTransition
            in={props.showForm}
            unmountOnExit
            timeout={{ enter: 0, exit: 300 }} 
        >
            <div className={`modal ${props.showForm ? "show" : ""}`}>
                <div className="modal__content" onClick={e => e.stopPropagation()}>
                    <header className="modal__header">
                        <h3 className="modal__title">Qual seu próximo destino?</h3>
                        <div className="icon--close">
                            <img src="/images/close-icon.svg" alt="Ícone de fechar" onClick={handleClick}/>
                        </div>
                    </header>
                    <div className="form">
                        <div className="form__elements">
                            <div className="form__element">
                                <input 
                                    type="text"
                                    name="title"
                                    id="title"
                                    value={props.formData.title}
                                    onChange={handleChanges}
                                    required
                                    className="form__input"
                                />
                                <label htmlFor="title" className="form__label">
                                  <span className="form__span">Cidade - Local</span>
                                </label>
                            </div>
                            <div className="form__element">
                                <input 
                                    type="text"
                                    name="location"
                                    id="location"
                                    value={props.formData.location}
                                    onChange={handleChanges}
                                    required
                                    className="form__input"
                                />
                                <label htmlFor="location" className="form__label">
                                  <span className="form__span">País</span>
                                </label>
                            </div>
                            <div className="form__element">
                                <input 
                                    type="text"
                                    name="googleMapsUrl"
                                    id="googleMapsUrl"
                                    value={props.formData.googleMapsUrl}
                                    onChange={handleChanges}
                                    required
                                    className="form__input"
                                />
                                <label htmlFor="googleMapsUrl" className="form__label">
                                  <span className="form__span">Link do local no Google Maps</span>
                                </label>
                            </div>
                            <div className="form__element">
                                <input 
                                    type="date"
                                    name="startDate"
                                    id="startDate"
                                    value={props.formData.startDate}
                                    onChange={handleChanges}
                                    required
                                    className="form__input"
                                />
                            </div>
                            <div className="form__element">
                                <input 
                                    type="date"
                                    name="endDate"
                                    id="endDate"
                                    value={props.formData.endDate}
                                    onChange={handleChanges}
                                    required
                                    className="form__input"
                                />
                            </div>
                            <div className="form__element">
                                <textarea 
                                    type="text"
                                    name="description"
                                    id="description"
                                    value={props.formData.description}
                                    onChange={handleChanges}
                                    required
                                    maxLength={256}
                                    className="form__textarea"
                                />
                                <label htmlFor="description" className="form__label">
                                  <span className="form__span">Descrição do local</span>
                                </label>
                            </div>
                            <div className="form__element">
                                <input 
                                    type="text"
                                    name="imageUrl"
                                    id="imageUrl"
                                    value={props.formData.imageUrl}
                                    onChange={handleChanges}
                                    required
                                    className="form__input"
                                />
                                <label htmlFor="imageUrl" className="form__label">
                                  <span className="form__span">Link de uma foto representativa</span>
                                </label>
                            </div>
                        </div>
                        {
                        <button className="button button--form" onClick={handleSubmit}>
                            <img src="/images/add-destination-icon.svg" alt="Ícone de adicionar novo destino" className="button__icon" />
                            <h3 className="button__text">{props.edit ? "Confirmar edição" : "Cadastrar novo destino"}</h3>
                        </button>
                        }
                    </div>
                </div>
            </div>
        </CSSTransition>,
        document.getElementById("root")
    );
}