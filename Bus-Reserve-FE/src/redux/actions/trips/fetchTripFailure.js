import { FETCH_TRIPS_FAILURE } from "../actionTypes";

export const fetchTripFailure = (error) => {
  return {
    type: FETCH_TRIPS_FAILURE,
    payload: error,
  };
};
