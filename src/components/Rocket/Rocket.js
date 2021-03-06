import React, { useEffect, useState } from "react";
import { getAllRockets } from "../../request/rocket";
import Spinner from "../Layout/Spinner";
import Rocketitem from "./Rocketitem";
import "../../css/custom.css";

const Rocket = () => {
  let [load, setLoad] = useState(true);
  let [text, setText] = useState("");
  let [rocket, setRocket] = useState([]);

  async function getData() {
    let data = await getAllRockets();
    if (data.error) {
      setLoad(false);
    }
    setLoad(false);
    setRocket(data);
    console.log(data);
  }
  useEffect(() => {
    getData();
  }, []);
  return load ? (
    <Spinner />
  ) : (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="topsetting">
          <h2 className="title">Rockets</h2>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="search"
            placeholder="Search"
          />
        </div>
        <div className="row">
          {!rocket ? (
            <h1>No data Found</h1>
          ) : (
            rocket
              .filter((roc) => {
                if (text === "") {
                  return roc;
                } else if (
                  roc.rocket_id.toUpperCase().includes(text.toUpperCase())
                ) {
                  return roc;
                } else return null;
              })
              .map((roc, index) => <Rocketitem key={index} rocket={roc} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Rocket;
