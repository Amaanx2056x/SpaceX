import React, { useEffect, useState } from "react";

import { getAllCapsules } from "../../request/capsule";
import Spinner from "../Layout/Spinner";
import Capsuleitem from "./Capsuleitem";

const Capsule = () => {
  let [load, setLoad] = useState(true);
  let [text, setText] = useState("");
  let [capsule, setCapsule] = useState([]);

  async function getData() {
    let data = await getAllCapsules();
    if (data.error) {
      setLoad(false);
    }
    setLoad(false);
    setCapsule(data);
  }
  useEffect(() => {
    getData();
  }, []);
  return load ? (
    <Spinner />
  ) : (
    <div className="album py-5 bg-light">
      <div className="container">
        <h2>Capsules</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="row">
          {!capsule ? (
            <h1>No data Found</h1>
          ) : (
            capsule
              .filter((cap) => {
                if (text === "") {
                  return cap;
                } else if (
                  cap.capsule_serial.toUpperCase().includes(text.toUpperCase())
                ) {
                  return cap;
                }
              })
              .map((cap, index) => <Capsuleitem key={index} capsule={cap} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Capsule;
