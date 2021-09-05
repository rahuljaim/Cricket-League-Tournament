import React, { useState, useEffect } from "react";
import Cricket from "../JSON/cricket.json";
const IPL = () => {
  const [city, setCity] = useState(0);
  const [allcity, setAllCity] = useState([]);
  const [cardArr, setCardArr] = useState([]);

  useEffect(() => {
    getCities();
  }, []);

  const getCities = () => {
    const cities = Cricket.map((e) => e.city);
    let myset = new Set(cities);
    let convettoarr = [...myset];
    setAllCity(convettoarr);
  };

  const updateCity = (e) => {
    setCity(e.target.value);
    const cardArr = Cricket.filter((ele) => ele.city == e.target.value);
    setCardArr(cardArr);
  };

  return (
    <div>
      <h4>Select City: </h4>

      <select id="city" className="form-select mb-4" onChange={updateCity}>
        {allcity.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <div className="row">
        {cardArr.map((card, index) => (
          <div className="col-md-6 mb-3" key={index}>
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">
                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="card-title">
                        <span className="text-primary">Team 1:</span> <br />
                        {card.team1}
                      </h5>
                    </div>
                    <div className="col-md-6">
                      <h5 className="card-title">
                        <span className="text-primary">Team 2:</span> <br />
                        {card.team2}
                      </h5>
                    </div>
                  </div>
                </h5>
              </div>
              <div className="card-body">
                <h3 className="card-title">
                  Winner: <u>{card.winner}</u>
                </h3>
                <p className="card-text">
                  <b>Win by Runs </b>: {card.win_by_runs} -
                  <b>Win by Wickets </b>: {card.win_by_wickets}
                </p>
                <p>
                  {" "}
                  Venue: <b>{card.venue}</b> played on {card.date}{" "}
                </p>
                <p>
                  {" "}
                  <b>Toss Winner</b>: {card.toss_winner} and{" "}
                  <b>toss decision</b>: {card.toss_decision}{" "}
                </p>
                <h4>
                  Man of the Match: <u>{card.player_of_match}</u>
                </h4>
              </div>
              <div className="card-footer text-muted">
                <b>Umpire 1</b>: {card.umpire1} - <b>Umpire 2</b>:{" "}
                {card.umpire2}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IPL;
