import { UPDATE_SOURCE_CITY } from "../actionTypes";

export const updateSourceCity = (city) => ({
  type: UPDATE_SOURCE_CITY,
  payload: city,
});
