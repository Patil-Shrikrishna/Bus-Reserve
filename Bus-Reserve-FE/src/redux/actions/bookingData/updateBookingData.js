import { UPDATE_BOOKING_DATA } from "../actionTypes";

export const updateBookingData = (data) => ({
  type: UPDATE_BOOKING_DATA,
  payload: data,
});
