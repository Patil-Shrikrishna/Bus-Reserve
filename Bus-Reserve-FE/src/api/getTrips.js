import { fetchTripRequest } from "../redux/actions/trips/fetchTripRequest";
import { fetchTripSuccess } from "../redux/actions/trips/fetchTripSuccess";
import { fetchTripFailure } from "../redux/actions/trips/fetchTripFailure";
import axios from "axios";

const getTrips = () => {
  return function (dispatch) {
    dispatch(fetchTripRequest());
    axios
      .get("http://localhost:3001/trip")
      .then((response) => {
        const trips = response.data.map((trip) => trip);
        dispatch(fetchTripSuccess(trips));
      })
      .catch((error) => {
        dispatch(fetchTripFailure(error.message));
      });
  };
};
export default getTrips;
