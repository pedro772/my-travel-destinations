import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

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

    function handleSubmit() {
        props.submitData(props.formData);
    }

    return ReactDOM.createPortal(
        <CSSTransition
            in={props.showForm}
            unmountOnExit
            timeout={{ enter: 0, exit: 300 }} 
        >
            <div className={`modal ${props.showForm ? "show" : ""}`}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <header className="modal-header">
                        <h2>Qual seu próximo destino?</h2>
                        <div className="icon-close">
                            <img src="/images/close-icon.svg" alt="Ícone de fechar" onClick={handleClick}/>
                        </div>
                    </header>
                    <div className="form">
                        <div className="form-inputs">
                            <div className="form-input">
                                <input 
                                    type="text"
                                    name="title"
                                    id="title"
                                    value={props.formData.title}
                                    onChange={handleChanges}
                                    required
                                />
                                <label htmlFor="title"><span>Cidade - Local</span></label>
                            </div>
                            <div className="form-input">
                                <input 
                                    type="text"
                                    name="location"
                                    id="location"
                                    value={props.formData.location}
                                    onChange={handleChanges}
                                    required
                                />
                                <label htmlFor="location"><span>País</span></label>
                            </div>
                            <div className="form-input">
                                <input 
                                    type="text"
                                    name="googleMapsUrl"
                                    id="googleMapsUrl"
                                    value={props.formData.googleMapsUrl}
                                    onChange={handleChanges}
                                    required
                                />
                                <label htmlFor="googleMapsUrl"><span>Link do local no Google Maps</span></label>
                            </div>
                            <div className="form-input">
                                <input 
                                    type="date"
                                    name="startDate"
                                    id="startDate"
                                    value={props.formData.startDate}
                                    onChange={handleChanges}
                                    required
                                />
                            </div>
                            <div className="form-input">
                                <input 
                                    type="date"
                                    name="endDate"
                                    id="endDate"
                                    value={props.formData.endDate}
                                    onChange={handleChanges}
                                    required
                                />
                            </div>
                            <div className="form-input">
                                <textarea 
                                    type="text"
                                    name="description"
                                    id="description"
                                    value={props.formData.description}
                                    onChange={handleChanges}
                                    required
                                />
                                <label htmlFor="description"><span>Descrição do local</span></label>
                            </div>
                            <div className="form-input">
                                <input 
                                    type="text"
                                    name="imageUrl"
                                    id="imageUrl"
                                    value={props.formData.imageUrl}
                                    onChange={handleChanges}
                                    required
                                />
                                <label htmlFor="imageUrl"><span>Link de uma foto representativa</span></label>
                            </div>
                        </div>
                        {
                        <button className="form-button" onClick={handleSubmit}>
                            <img src="/images/add-destination-icon.svg" alt="Ícone de adicionar novo destino" className="add-icon" />
                            <h3 className="add-text">Cadastrar novo destino</h3>
                        </button>
                        }
                    </div>
                </div>
            </div>
        </CSSTransition>,
        document.getElementById("root")
    );
}