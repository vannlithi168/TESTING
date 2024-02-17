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
                <strong>
                  Common Name:
                  <br />
                </strong>{" "}
                {country.name.common}
              </p>
              <p>
                <strong>
                  Official Name: <br />
                </strong>{" "}
                {country.name.official}
              </p>
              <p>
                <strong>
                  Capital: <br />
                </strong>{" "}
                {country.capital}
              </p>
              <p>
                <strong>
                  Population: <br />
                </strong>{" "}
                {country.population}
              </p>
              <p>
                <strong>
                  Region: <br />
                </strong>{" "}
                {country.region}
              </p>
              <p>
                <strong>
                  Timezones: <br />
                </strong>{" "}
                {country.timezones}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
