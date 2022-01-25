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
            <img src={props.imageUrl} alt={props.title} className="card--image"/>
            <div className="card--info">
                <div className="card--info-location">
                    <img src="/images/pin.png" alt="pin" className="card--location-pin" />
                    {props.location && <label className="card--location-text">{props.location}</label>}
                    {props.googleMapsUrl && <a href={props.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="card--location-link">View on Google Maps</a>}
                </div>
                <div className="card--title-action">
                    {props.title && <h2 className="card--title">{props.title}</h2>}
                    <button onClick={handleEdit} className="action-button edit">
                        <img src="/images/edit-icon.svg" alt="Ícone de editar"/>
                    </button>
                    <button onClick={handleDelete} className="action-button">
                        <img src="/images/delete-icon.svg" alt="Ícone de editar"/>
                    </button>
                </div>
                {props.startDate && props.endDate && <h6 className="card--dates">{props.startDate} - {props.endDate}</h6>}
                {props.description && <p className="card--description">{props.description}</p>}
            </div>
        </section>
    );
}