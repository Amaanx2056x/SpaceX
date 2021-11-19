import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Moment from "react-moment";
import Carousal from "../Layout/Carousal";
import { getSingleRocket } from "../../request/rocket";
import Spinner from "../Layout/Spinner";
const RocketDetails = () => {
  let [load, setLoad] = useState(true);
  let [rocket, setRocket] = useState();
  let { id } = useParams();
  useEffect(() => {
    async function getData() {
      let data = await getSingleRocket(id);
      setLoad(false);
      setRocket(data);
    }
    getData();
  }, [id]);
  return load ? (
    <Spinner />
  ) : (
    <div>
      {!rocket ? (
        <div> No Data Found</div>
      ) : (
        <div className="row my-5">
          {console.log(rocket)}
          <Carousal source={rocket.flickr_images} />
          <div className="col-md-6">
            <div className="card info-card">
              <div className="card-header">
                <p>Company:{rocket.company}</p>
                <p>Country: {rocket.country}</p>
                <p>Name: {rocket.rocket_name}</p>
                <p>Type: {rocket.rocket_type}</p>
                <p>
                  Landing Legs: {rocket.landing_legs.number} , Material:{" "}
                  {rocket.landing_legs.material}
                </p>
                <p>Wiki: {rocket.wikipedia}</p>
              </div>
              <div className="card-body">
                {rocket.description && <p>{rocket.description}</p>}
              </div>
              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div
                    className="card-header"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                  >
                    <span className="title">Physical Information</span>
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
                        <li>Height:{rocket.height.meters} meters</li>
                        <li>Diameter:{rocket.diameter.meters} meters</li>
                        <li>Weight:{rocket.mass.kg} kgs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div
                    className="card-header"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                  >
                    <span className="title">Engines</span>
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
                        <li>Layout:{rocket.engines.layout} </li>
                        <li>Number:{rocket.engines.number} </li>
                        <li>Type:{rocket.engines.type}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-footer">
                <p>
                  Original Launch:{" "}
                  <Moment format="DD/MM/YYYY">{rocket.original_launch}</Moment>
                </p>
                <p>
                  First Flight:{" "}
                  <Moment format="DD/MM/YYYY">{rocket.first_flight}</Moment>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <Link className="btn btn-secondary" to="/rocket">
        Back
      </Link>
    </div>
  );
};

export default RocketDetails;
