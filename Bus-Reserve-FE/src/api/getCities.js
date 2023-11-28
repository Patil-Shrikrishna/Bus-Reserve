import { getCitiesRequest } from "../redux/actions/cities/getCitiesRequest";
import { getCitiesSuccess } from "../redux/actions/cities/getCitiesSuccess";
import { getCitiesFailure } from "../redux/actions/cities/getCitiesFailure";
import axios from "axios";

const getCities = (city) => {
  return function (dispatch) {
    dispatch(getCitiesRequest());
    console.log("getCITIES: ", city);
    axios
      .post("http://localhost:3001/cities/search", { city: city })
      .then((response) => {
        const cities = response.data;
        dispatch(getCitiesSuccess(cities));
      })
      .catch((error) => {
        dispatch(getCitiesFailure(error.message));
      });
  };
};
export default getCities;
