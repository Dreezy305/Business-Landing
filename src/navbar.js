/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light menu fixed-top">
        <div class="container">
          <a class="navbar-brand" href="/">
            {/*<img
              src="./images/pied-piper-alt-brands.svg"
              alt="navbar logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />*/}
            {/*Navbar*/}
          </a>
          <button
            class="navbar-toggler mobile-toggle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end d-sm-inline mobile-collapse"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav justify-content-space-evenly mobile py-2">
              <a class="nav-link active " aria-current="page" href="#">
                Timeline
              </a>
              <a class="nav-link " href="#">
                Peer Review
              </a>
              <a class="nav-link " href="#">
                Login
              </a>

              <button
                type="button"
                className="btn btn-outline-warning me-5 btn-pill px-4"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
