import { FETCH_TRIPS_SUCCESS } from "../actionTypes";
export const fetchTripSuccess = (trips) => {
  return {
    type: FETCH_TRIPS_SUCCESS,
    payload: trips,
  };
};
