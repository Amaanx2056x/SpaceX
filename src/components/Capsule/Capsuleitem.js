import React from "react";
import { Link } from "react-router-dom";

const Capsuleitem = ({ capsule: { capsule_serial, type, details } }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm mycard">
        <img
          className="card-img-top"
          src="https://images.unsplash.com/photo-1601892782633-675465fa7f3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=876&q=80"
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
