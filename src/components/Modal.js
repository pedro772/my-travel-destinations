import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

export default function Modal(props) {

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
        props.closeModal();
        props.formData = {
            id: null,
            title: "",
            location: "",
            googleMapsUrl: "",
            startDate: "",
            endDate: "",
            description: "",
            imageUrl: ""
        }
    }

    return ReactDOM.createPortal(
        <CSSTransition
            in={props.show}
            unmountOnExit
            timeout={{ enter: 0, exit: 300 }} 
        >
            <div className={`modal ${props.show ? "show" : ""}`} onClick={handleClick}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <header className="modal-header">
                        <h2>Qual seu próximo destino?</h2>
                        <img src="/images/close-icon.svg" alt="Ícone de fechar" className="icon-close" onClick={handleClick}/>
                    </header>
                    <div className="form">
                        <div className="form-inputs">
                            <input 
                                type="text"
                                className="form-input"
                                placeholder="Cidade e local"
                                name="title"
                                value={props.formData.title}
                                onChange={handleChanges}
                            />
                            <input 
                                type="text"
                                className="form-input"
                                placeholder="País"
                                name="location"
                                value={props.formData.location}
                                onChange={handleChanges}
                            />
                            <input 
                                type="text"
                                className="form-input"
                                placeholder="Link do local no Google Maps"
                                name="googleMapsUrl"
                                value={props.formData.googleMapsUrl}
                                onChange={handleChanges}
                            />
                            <input 
                                type="date"
                                className="form-input"
                                name="startDate"
                                value={props.formData.startDate}
                                onChange={handleChanges}
                            />
                            <input 
                                type="date"
                                className="form-input"
                                name="endDate"
                                value={props.formData.endDate}
                                onChange={handleChanges}
                            />
                            <textarea 
                                type="text"
                                className="form-input"
                                placeholder="Descrição do local"
                                name="description"
                                value={props.formData.description}
                                onChange={handleChanges}
                            />
                            <input 
                                type="text"
                                className="form-input"
                                placeholder="Link de uma foto representativa"
                                name="imageUrl"
                                value={props.formData.imageUrl}
                                onChange={handleChanges}
                            />
                        </div>
                        <button className="form-button" onClick={handleSubmit}>
                            Cadastrar novo destino
                        </button>
                    </div>
                </div>
            </div>
        </CSSTransition>,
        document.getElementById("root")
    );
}