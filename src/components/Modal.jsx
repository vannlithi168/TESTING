// src/components/Modal.js

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
                <strong>Country Name:</strong> {country.name.common}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
