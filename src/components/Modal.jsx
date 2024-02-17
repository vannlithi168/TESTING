import React from "react";
import "../styles/Modal.css";

const Modal = ({ country, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Country Details</h2>
        {country && (
          <div className="card">
            <img src={country.flags.png} alt={`${country.name.common} flag`} />
            <div className="card-details">
              <p>
                <strong>Common Name:</strong> {country.name.common}
              </p>
              <p>
                <strong>Official Name:</strong> {country.name.official}
              </p>
              <p>
                <strong>Capital:</strong> {country.capital}
              </p>
              <p>
                <strong>Population:</strong> {country.population}
              </p>
              <p>
                <strong>Region:</strong> {country.region}
              </p>
              <p>
                <strong>Subregion:</strong> {country.subregion}
              </p>
              {/* You can add more details here as needed */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
