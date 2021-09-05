import React, { useState, useEffect } from "react";
import Cricket from "../JSON/cricket.json";

const Scores = () => {
  const [year, setYear] = useState(0);
  const [team, setTeam] = useState("");
  const [teamList, setTeamList] = useState([]);
  const [winnerTeam, setWinnerTeam] = useState([]);
  const YY = [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016];

  useEffect(() => {
    getTeams();
  }, []);

  function getTeams() {
    let teamsList = Cricket.map((team) => team.winner);
    let myset = new Set(teamsList);
    let teamarr = [...myset];
    setTeamList(teamarr);
  }

  function getWinnerTeamData(teamname) {
    let data = Cricket.filter((t) => t.winner == teamname);
    setWinnerTeam(data);
    // console.log(data);
  }

  function setTeamVal(e) {
    setTeam(e.target.value);
    getWinnerTeamData(e.target.value);
  }

  return (
    <div>
      <h4>Select Team: </h4>
      <select id="team" className="form-select mb-4" onChange={setTeamVal}>
        <option value="">--SelectTeam--</option>
        {teamList.map((item, index) => (
          <option key={`city${index + 1}`} value={item}>
            {item}
          </option>
        ))}
      </select>
      <h1>Score Card</h1>
      <table className="table table-bordered border-primary bg-white">
        <thead>
          <tr>
            <th scope="col">S No</th>
            <th scope="col">Match with Team</th>
            <th scope="col">Date of Match</th>
            <th scope="col">Toss Winner</th>
            <th scope="col">Toss Decision</th>
            <th scope="col">Win by Runs</th>
            <th scope="col">Win by Wickets</th>
            <th scope="col">**Man of The Match</th>
            <th scope="col">Venue</th>
          </tr>
        </thead>
        <tbody>
          {winnerTeam.map((data, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{data.winner == data.team1 ? data.team2 : data.team1}</td>
              <td>{data.date}</td>
              <td>{data.toss_winner}</td>
              <td>{data.toss_decision}</td>
              <td>{data.win_by_runs}</td>
              <td>{data.win_by_wickets}</td>
              <td>{data.player_of_match}</td>
              <td>{data.venue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Scores;
