import { GET_CITIES_SUCCESS } from "../actionTypes";

export const getCitiesSuccess = (data) => {
  return {
    type: GET_CITIES_SUCCESS,
    payload: data,
  };
};
