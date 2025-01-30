import React from "react";
import logo from "../Images/TaskbudyLogo.png";
import { CgProfile } from "react-icons/cg";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-success p-2 text-dark bg-info-subtle">
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            <img
              src={logo}
              className="img-fluid"
              style={{ height: "50px", backgroundColor: "210, 180, 222" }}
            ></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 fs-5  mb-lg-0">
              <li className="nav-item  ">
                <a
                  className="nav-link active "
                  aria-current="page"
                  onClick={() => navigate("/")}
                  href="#"
                >
                  Home
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Service Directory
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/services/sofa" className="dropdown-item">
                      Sofa Cleaning
                    </a>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <a className="dropdown-item" href="/services/cleaning">
                      Intense cleaning
                    </a>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <a className="dropdown-item" href="/services/bathroom">
                      Bathroom Cleaning
                    </a>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <a className="dropdown-item" href="/services/haircut">
                      Men Haircutting
                    </a>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/services/door">
                      Door Lock Repairing
                    </a>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <a className="dropdown-item" href="/services/geyser">
                      Geyser Service
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  onClick={() => navigate("/CustomerRegister")}
                  href="#"
                >
                  Login/Register
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Service"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
