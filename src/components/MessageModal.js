import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

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
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <header className="modal-header">
                        <h2>Deletar destino</h2>
                        <div className="icon-close">
                            <img src="/images/close-icon.svg" alt="Ícone de fechar" onClick={handleClose}/>
                        </div>
                    </header>
                    <div className="confirm-message">
                        <p>Tem certeza que quer deletar esse destino?</p>
                    </div>
                    <div className="confirm-buttons">
                        <button className="confirm-button" onClick={handleClose}>Não</button>
                        <button className="confirm-button confirm-delete" onClick={handleDelete}>Sim</button>
                    </div>
                </div>
            </div>
        </CSSTransition>,
        document.getElementById("root")
    );
}