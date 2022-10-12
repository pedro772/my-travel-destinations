import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./messageModal.css";

export default function MessageModal(props) {

    function handleClose() {
        props.closeModal();
    }

    function handleDelete() {
        props.deleteCard(props.cardToDelete);
        props.closeModal();
    }

    return ReactDOM.createPortal(
        <CSSTransition
            in={props.showDeleteMessage}
            unmountOnExit
            timeout={{ enter: 0, exit: 300 }} 
        >
            <div className={`modal ${props.showDeleteMessage ? "show" : ""}`}>
                <div className="modal__content" onClick={e => e.stopPropagation()}>
                    <header className="modal__header">
                        <h2 className="modal__title">Deletar destino</h2>
                        <div className="icon--close">
                            <img src="/images/close-icon.svg" alt="Ícone de fechar" onClick={handleClose}/>
                        </div>
                    </header>
                    <div className="confirm-modal__message">
                        <p>Tem certeza que quer deletar esse destino?</p>
                    </div>
                    <div className="confirm-modal__buttons">
                        <button className="confirm-modal__button" onClick={handleClose}>Não</button>
                        <button className="confirm-modal__button confirm-modal__button--delete" onClick={handleDelete}>Sim</button>
                    </div>
                </div>
            </div>
        </CSSTransition>,
        document.getElementById("root")
    );
}