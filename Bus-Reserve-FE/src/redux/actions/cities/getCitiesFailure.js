import { GET_CITIES_FAILURE } from "../actionTypes";

export const getCitiesFailure = (error) => {
  return {
    type: GET_CITIES_FAILURE,
    payload: error,
  };
};
