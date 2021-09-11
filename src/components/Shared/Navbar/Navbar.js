import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class=" container">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link ms-5 active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5 ms-5" href="#">
                Life Style
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5" href="#">
                Technology
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5" href="#">
                Travel
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link ms-5 dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Login
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Admin
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/AddNews">
                    Add News
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    404 Error
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
