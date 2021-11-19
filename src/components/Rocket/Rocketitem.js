import React from "react";
import { Link } from "react-router-dom";

const Rocketitem = ({
  rocket: {
    id,
    active,
    stages,
    boosters,
    cost_per_launch,
    success_rate_pct,
    first_flight,
    country,
    company,
    height,
    diameter,
    mass,
    payload_weights,
    first_stage,
    second_stage,
    engines,
    landing_legs,
    flickr_images,
    wikipedia,
    description,
    rocket_id,
    rocket_name,
    rocket_type,
  },
}) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm mycard">
        <img className="card-img-top" src={flickr_images[0]} alt="" />
        <div className="card-body">
          <h1>{rocket_name}</h1>
          <p className="card-text">{description.slice(0, 100)}...</p>
          <div className="d-flex justify-content-between align-items-center">
            <Link className="btn btn-secondary" to={`/rocket/${rocket_id}`}>
              More...
            </Link>
            <small className="text-muted">{country}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rocketitem;
