import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getSingleRocket } from "../../request/rocket";
const RocketDetails = () => {
  let [load, setLoad] = useState(true);
  let [rocket, setRocket] = useState({});
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
      {!rocket ? <div> No Data Found</div> : <div>Data</div>}
      <Link className="btn btn-secondary" to="/rocket">
        Back
      </Link>
    </div>
  );
};

export default RocketDetails;
