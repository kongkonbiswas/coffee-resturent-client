import React from "react";
import Map from "./Map";

const Card = () => {
  return (
    <section className="news">
      <div className="container">
        <h1 className="mb-3 text-center">My Google Map.</h1>
        <div className="row mt-5" style={{ display: "flex"}}>
          <div>
            <h1>December 28, 2021</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa
            </p>
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
