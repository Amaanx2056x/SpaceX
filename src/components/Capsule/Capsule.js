import React, { useEffect, useState } from "react";

import { getAllCapsules } from "../../request/capsule";
import Spinner from "../Layout/Spinner";
import Capsuleitem from "./Capsuleitem";
import ReactPaginate from "react-paginate";
import "../../css/custom.css";
const Capsule = () => {
  let [load, setLoad] = useState(true);
  let [text, setText] = useState("");
  let [capsule, setCapsule] = useState([]);
  let [page, setPage] = useState(0);
  let perPage = 6;
  let pageVisited = page * perPage;
  let pageCount = Math.ceil(capsule.length / perPage);
  let changePage = ({ selected }) => {
    setPage(selected);
  };
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
        <div className="topsetting">
          <h2 className="title">Capsules</h2>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="search"
            placeholder="Search"
          />
        </div>

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
                } else return null;
              })
              .slice(pageVisited, pageVisited + perPage)
              .map((cap, index) => <Capsuleitem key={index} capsule={cap} />)
          )}
          <ReactPaginate
            previousLabel={"<<"}
            nextLabel={">>"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination"}
            previousLinkClassName={"btn btn-primary"}
            nextLinkClassName={"btn btn-primary"}
            disabledClassName={"disabled"}
            activeLinkClassName={"active"}
            pageLinkClassName={"btn btn-light"}
          />
        </div>
      </div>
    </div>
  );
};

export default Capsule;
