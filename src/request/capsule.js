import axios from "axios";

let getAllCapsules = async () => {
  try {
    let res = await axios.get(`https://api.spacexdata.com/v3/capsules`);
    return res.data;
  } catch (e) {
    return { error: "No data found" };
  }
};
let getSingleCapsule = async (id) => {
  try {
    let res = await axios.get(`https://api.spacexdata.com/v3/capsules/${id}`);
    return res.data;
  } catch (e) {
    return { error: "No data found" };
  }
};

export { getAllCapsules, getSingleCapsule };
