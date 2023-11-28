import { POST_BOOKING_FAILURE } from "../actionTypes";

export const postBookingFailure = (error) => {
  return {
    type: POST_BOOKING_FAILURE,
    payload: error,
  };
};
