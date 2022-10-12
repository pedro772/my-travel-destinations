import React from "react";
import "./card.css";

export default function Card(props) {

    function handleEdit() {
        props.setEdit(true);
        props.editCard(props.id);
    }

    function handleDelete() {
        props.setShowDeleteMessage(true);
        props.setCardToDelete(props.id);
    }

    return (
        props.title &&
        <section className="card">
            <img src={props.imageUrl} alt={props.title} className="card__image"/>
            <div className="card__info">
                <div className="card__info--location">
                    <img src="/images/pin.png" alt="pin" className="card__location--pin" />
                    {props.location && <label className="card__location--text">{props.location}</label>}
                    {props.googleMapsUrl && <a href={props.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="card__location--link">View on Google Maps</a>}
                </div>
                <div className="card__info--main">
                    {props.title && <h3 className="card__title">{props.title}</h3>}
                    <button onClick={handleEdit} className="card__action--button edit">
                        <img className="card__icon" src="/images/edit-icon.svg" alt="Ícone de editar"/>
                    </button>
                    <button onClick={handleDelete} className="card__action--button">
                        <img className="card__icon" src="/images/delete-icon.svg" alt="Ícone de editar"/>
                    </button>
                </div>
                {props.startDate && props.endDate && <h6 className="card__dates">{props.startDate} - {props.endDate}</h6>}
                {props.description && <p className="card__description">{props.description}</p>}
            </div>
        </section>
    );
}