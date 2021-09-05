import React, { useState } from "react";
import Teams from "../JSON/teams.json";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Content from "./Content";
import IPL from "../pages/IPL";
import Scores from "../pages/Scores";
import Matches_list from "../pages/Matches_list";

const Header = () => {
  const [country, setCountry] = useState(0);
  const countyHandeler = (e) => {
    setCountry(e.target.value);
  };

  const allTabs = [
    "/",
    "/contact",
    "/player-names",
    "/ipl-details",
    "/scores",
    "/matchdetail",
  ];

  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <h2 style={{ color: "#6610f2" }}>Cricket Legue </h2>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/player-names">
                    Player Names
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ipl-details">
                    IPL Data
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/scores">
                    Scores
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="App">
          <Switch>
            <Route
              path={allTabs[1]}
              render={() => (
                <div>
                  <Contact />
                </div>
              )}
            />
            <Route
              path={allTabs[2]}
              render={() => (
                <div>
                  <Content country={country} />
                </div>
              )}
            />
            <Route
              path={allTabs[3]}
              render={() => (
                <div>
                  <IPL />
                </div>
              )}
            />
            <Route
              path={allTabs[4]}
              render={() => (
                <div>
                  <Scores />
                </div>
              )}
            />
            <Route
              path={allTabs[0]}
              render={() => (
                <div>
                  <Home />
                </div>
              )}
            />
            <Route
              path={allTabs[5]}
              render={() => (
                <div>
                  <Matches_list />
                </div>
              )}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Header;
