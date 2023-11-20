import { UPDATE_TRAVEL_DATE } from "../actionTypes";

export const updateTravelDate = (date) => ({
  type: UPDATE_TRAVEL_DATE,
  payload: date,
});
