import axios from "axios";
import { postBookingRequest } from "../redux/actions/booking/postBookingRequest";
import { postBookingSuccess } from "../redux/actions/booking/postBookingSuccess";
import { postBookingFailure } from "../redux/actions/booking/postBookingFailure";

const postBooking = (bookingData) => {
  return async function (dispatch) {
    dispatch(postBookingRequest());
    axios
      .post("http://localhost:3001/booking/addbooking", bookingData)
      .then((response) => {
        const data = response.data;
        dispatch(postBookingSuccess(data));
      })
      .catch((error) => {
        dispatch(postBookingFailure(error.message));
      });
  };
};
export default postBooking;
