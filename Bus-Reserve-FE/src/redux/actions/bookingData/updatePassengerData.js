import { UPDATE_PASSENGER_DATA } from "../actionTypes";

export const updatePassengerData = (data) => ({
  type: UPDATE_PASSENGER_DATA,
  payload: data,
});
