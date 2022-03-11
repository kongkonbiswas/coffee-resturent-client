import React from "react";
import Map from "./Map";

const Card = () => {
  return (
    <section className="news">
      <div className="container">
        <h1 className="mb-3 text-center">My Google Map.</h1>
        <div className="row mt-5" style={{ display: "flex"}}>
          <div>
            <h3>February 08, 2022</h3>
          </div>
          <div style={{width: "100%"}} >
            <Map></Map>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
