import axios from "axios";
import { postBookingFailure } from "../redux/actions/booking/postBookingFailure";
import stripePromise from "../utils/stripe";

const postPaymentRequest = (bookingData) => {
  const stripe = stripePromise;
  return async function (dispatch) {
    axios
      .post("http://localhost:3001/booking/payment", bookingData)
      .then((response) => {
        const data = response.data;
        stripe
          .redirectToCheckout({
            sessionId: data.id,
          })
          .then((result) => {
            if (result.error) {
              dispatch(postBookingFailure(result.error.message));
            }
          })
          .catch((error) => {
            dispatch(postBookingFailure(error.message));
          });
      })
      .catch((error) => {
        dispatch(postBookingFailure(error.message));
      });
  };
};

export default postPaymentRequest;
