import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

export default function Modal(props) {

    function handleClick() {
        props.closeModal();
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
                                value={props.title}
                            />
                            <input 
                                type="text"
                                className="form-input"
                                placeholder="País"
                                name="location"
                                value={props.location}
                            />
                            <input 
                                type="text"
                                className="form-input"
                                placeholder="Link do local no Google Maps"
                                name="googleMapsUrl"
                                value={props.googleMapsUrl}
                            />
                            <input 
                                type="date"
                                className="form-input"
                                name="startDate"
                                value={props.startDate}
                            />
                            <input 
                                type="date"
                                className="form-input"
                                name="startDate"
                                value={props.startDate}
                            />
                            <textarea 
                                type="text"
                                className="form-input"
                                placeholder="Descrição do local"
                                name="description"
                                value={props.description}
                            />
                            <input 
                                type="text"
                                className="form-input"
                                placeholder="Link de uma foto representativa"
                                name="googleMapsUrl"
                                value={props.imageUrl}
                            />
                        </div>
                        <button className="form-button">
                            Cadastrar novo destino
                        </button>
                    </div>
                </div>
            </div>
        </CSSTransition>,
        document.getElementById("root")
    );
}