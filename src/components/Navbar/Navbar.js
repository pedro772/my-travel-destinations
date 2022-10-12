import React from "react";

export default function Navbar( props ) {
    return (
        <nav className="navbar">
            <div className="navbar__title">
              <img src="/images/nav-icon.png" alt="Globe Icon" className="navbar__icon" />
              <label className="navbar__header">my travel destinations.</label>
            </div>

            <div>
              <button onClick={() => props.setShowForm(true)} className="button hide-mobile">
                <img src="/images/add-icon.svg" alt="Ícone de adicionar" className="button__icon" />
                <h3 className="button__text">Adicionar novo destino</h3>
              </button>

              <button onClick={() => props.setShowForm(true)} className="button show-mobile">
                <img src="/images/add-icon.svg" alt="Ícone de adicionar" className="button__icon" />
                <h3 className="button__text">Destino</h3>
              </button>
            </div>
        </nav>
    );
}