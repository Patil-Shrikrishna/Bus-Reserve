import { UPDATE_DESTINATION_CITY } from "../actionTypes";

export const updateDestinationCity = (city) => ({
  type: UPDATE_DESTINATION_CITY,
  payload: city,
});
