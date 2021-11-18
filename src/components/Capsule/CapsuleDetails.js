import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getSingleCapsule } from "../../request/capsule";
import Spinner from "../Layout/Spinner";
const CapsuleDetails = () => {
  let [load, setLoad] = useState(true);
  let [capsule, setCapsule] = useState({});
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
      {!capsule ? <div> No Data Found</div> : <div>Data</div>}
      <Link className="btn btn-secondary" to="/">
        Back
      </Link>
    </div>
  );
};

export default CapsuleDetails;
