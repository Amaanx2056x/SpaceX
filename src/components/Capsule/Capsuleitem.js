import React from "react";
import { Link } from "react-router-dom";

const Capsuleitem = ({
  capsule: {
    capsule_serial,
    capsule_id,
    status,
    original_launch,
    original_launch_unix,
    missions,
    landings,
    type,
    details,
    reuse_count,
  },
}) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img
          className="card-img-top"
          src="https://via.placeholder.com/150"
          alt=""
        />
        <div className="card-body">
          <h1>{capsule_serial}</h1>
          <p className="card-text">{details}</p>
          <div className="d-flex justify-content-between align-items-center">
            <Link
              className="btn btn-secondary"
              to={`/capsule/${capsule_serial}`}
            >
              More...
            </Link>
            <small className="text-muted">{type}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capsuleitem;
