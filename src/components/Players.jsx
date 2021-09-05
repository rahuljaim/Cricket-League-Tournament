import { useState } from "react";
import Teams from "../JSON/teams.json";
const Players = (props) => {
  const [player, setPlayer] = useState();
  const { country } = props;
  const filterTeam = (ele) => {
    let team = Teams.filter((e) => e[ele])[0];
    setPlayer(team[ele]);
  };
  filterTeam(country);
  return (
    <>
      <div>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {player
            ? player.map((e) => (
                <div className="col">
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title">{e}</h5>
                    </div>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </>
  );
};

export default Players;
