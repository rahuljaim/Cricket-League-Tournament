import React from "react";
import Venue from "../JSON/venue.json";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const navigatetoDetail = (e) => {
    history.push({
      pathname: "/matchdetail",
      state: {
        // location state
        data: e.Name,
      },
    });
  };
  return (
    <div className="mb-4">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {Venue.map((e, i) => (
          <div className="col" onClick={() => navigatetoDetail(e)} key={i}>
            <div className="card">
              <img src={e.Image} className="card-img-top" alt={e.Name} />
              <div className="card-body">
                <h5 className="card-title">{e.Name}</h5>
                {/* <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
