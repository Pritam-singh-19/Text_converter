import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link for routing

export default function Navbar({ title, aboutText, mode, toggleMode, backgroundColor = "white" }) { // Set default value for backgroundColor directly in function parameter
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${mode}`}
      style={{ backgroundColor }} // Apply custom background color
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link> {/* Use Link instead of <a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{aboutText}</Link> {/* Use Link for About page */}
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onChange={toggleMode}
              checked={mode === 'dark'}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              {mode === 'light' ? "Enable Dark Mode" : "Enable Light Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string, // Add PropType for backgroundColor
};
