import React from "react";
import { useState } from "react";
import Teams from "../JSON/teams.json";

const Content = () => {
  const [country, setCountry] = useState(0);
  const [player, setPlayer] = useState();
  const countyHandeler = (e) => {
    setCountry(e.target.value);
    filterTeam(e.target.value);
  };

  const filterTeam = (ele) => {
    let team = Teams.filter((e) => e[ele])[0];
    setPlayer(team[ele]);
  };

  return (
    <>
      <div>
        <div>
          <h4>Select Player: </h4>
          <select
            className="form-select mb-4"
            id="country"
            onChange={countyHandeler}
          >
            {Teams.map((item, index) => {
              let [keys] = Object.keys(item);
              return (
                <option key={keys} value={keys}>
                  {keys}
                </option>
              );
            })}
          </select>

          <div className="row row-cols-1 row-cols-md-4 g-4">
            {player
              ? player.map((e) => (
                  <div className="col">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title" id={country}>
                          {e}
                        </h5>
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
