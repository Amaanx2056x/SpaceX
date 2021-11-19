import React, { useEffect, useState } from "react";
import Moment from "react-moment";

import { useParams, Link } from "react-router-dom";
import { getSingleCapsule } from "../../request/capsule";
import Spinner from "../Layout/Spinner";
const CapsuleDetails = () => {
  let [load, setLoad] = useState(true);
  let [capsule, setCapsule] = useState();
  let { id } = useParams();
  useEffect(() => {
    async function getData() {
      let data = await getSingleCapsule(id);
      setLoad(false);
      setCapsule(data);
    }
    getData();
  }, [id]);
  return load ? (
    <Spinner />
  ) : (
    <div>
      {!capsule ? (
        <div> No Data Found</div>
      ) : (
        <div className="row my-5">
          <div className="col-md-6">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1601892782633-675465fa7f3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=876&q=80"
              alt=""
            />
          </div>
          <div className="col-md-6">
            <div className="card info-card">
              <div className="card-header">
                <h5>Serial: {capsule.capsule_serial}</h5>
                <h5>ID: {capsule.capsule_id}</h5>
                <h5>Status: {capsule.status}</h5>
                <h5>Type: {capsule.type}</h5>
              </div>
              <div className="card-body">
                {capsule.details && <p>{capsule.details}</p>}
                <p>Landings: {capsule.landings}</p>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div
                    className="card-header"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                  >
                    <span className="title">Missions</span>
                    <span className="accicon">
                      <i className="fas fa-angle-down rotate-icon"></i>
                    </span>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <ul>
                        {capsule.missions.map((mission) => (
                          <li key={mission.name}>
                            Name: {mission.name} , Flight: {mission.flight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <p>
                  Original Launch:{" "}
                  <Moment format="DD/MM/YYYY">{capsule.original_launch}</Moment>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <Link className="btn btn-secondary" to="/">
        Back
      </Link>
    </div>
  );
};

export default CapsuleDetails;
