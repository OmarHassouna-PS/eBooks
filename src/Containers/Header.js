import React, { useContext } from 'react'
import { userSearch } from '../App';

export default function Header() {


  const { value, setValue } = useContext(userSearch);


  function handleChange(event) {
    setValue(event.target.value);
    console.log(event.target.value)
  }

  return (
    <>
      <header id="Home" className="sticky-top">
        <nav
          className="navbar navbar-expand-md navbar-dark bg-primary justify-content-center"
          aria-label="Tenth navbar example"
        >
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample08"
              aria-controls="navbarsExample08"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="row col-md-3 col-lg-4 collapse navbar-collapse justify-content-center"
              id="navbarsExample08"
            >
              <ul className="navbar-nav justify-content-center col-12">
                <li className="nav-item ms-md-4 ms-lg-5">
                  <a className="nav-link" href="#">
                    HOME
                  </a>
                </li>
                <li className="nav-item ms-md-4 ms-lg-5">
                  <a className="nav-link" href="#register-section">
                    Register
                  </a>
                </li>
                <li className="nav-item ms-md-4 ms-lg-5">
                  <a className="nav-link" href="#information-section">
                    Information
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="row col-md-3 col-lg-4 collapse navbar-collapse justify-content-center"
              id="navbarsExample08"
            >
              <div>
                <input
                  className="form-control"
                  placeholder="Find a book"
                  type="text"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className='hero-text'>
        <h1>Welcome to our book display site! Browse our collection of books on a variety of topics and find your next great read.</h1>
      </div>

    </>
  )
}
