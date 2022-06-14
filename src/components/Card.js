import React from "react";

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
                <div className="card__location">
                    <img src="/images/pin.png" alt="pin" className="card__pin" />
                    {props.location && <label className="card__country">{props.location}</label>}
                    {props.googleMapsUrl && <a href={props.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="card__link">View on Google Maps</a>}
                </div>
                <div className="card__header">
                    {props.title && <h2 className="card__title">{props.title}</h2>}
                    <button onClick={handleEdit} className="button edit">
                        <img src="/images/edit-icon.svg" alt="Ícone de editar"/>
                    </button>
                    <button onClick={handleDelete} className="button">
                        <img src="/images/delete-icon.svg" alt="Ícone de editar"/>
                    </button>
                </div>
                {props.startDate && props.endDate && <h6 className="card__dates">{props.startDate} - {props.endDate}</h6>}
                {props.description && <p className="card__description">{props.description}</p>}
            </div>
        </section>
    );
}