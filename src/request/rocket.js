import axios from "axios";

let getAllRockets = async () => {
  try {
    let res = await axios.get(`https://api.spacexdata.com/v3/rockets`);
    return res.data;
  } catch (e) {
    return { error: "No data found" };
  }
};
let getSingleRocket = async (id) => {
  try {
    let res = await axios.get(`https://api.spacexdata.com/v3/rockets/${id}`);
    return res.data;
  } catch (e) {
    return { error: "No data found" };
  }
};

export { getAllRockets, getSingleRocket };
