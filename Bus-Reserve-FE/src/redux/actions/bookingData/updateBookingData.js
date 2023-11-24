import { UPDATE_BOOKING_DATA } from "../actionTypes";

export const updateBokingData = (data) => ({
  type: UPDATE_BOOKING_DATA,
  payload: data,
});
