import { POST_BOOKING_SUCCESS } from "../actionTypes";

export const postBookingSuccess = (data) => {
  return {
    type: POST_BOOKING_SUCCESS,
    payload: data,
  };
};
