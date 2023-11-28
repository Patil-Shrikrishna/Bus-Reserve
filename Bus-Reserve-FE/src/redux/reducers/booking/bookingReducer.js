import { POST_BOOKING_REQUEST } from "../../actions/actionTypes";
import { POST_BOOKING_SUCCESS } from "../../actions/actionTypes";
import { POST_BOOKING_FAILURE } from "../../actions/actionTypes";

const initialState = {
  loading: false,
  booking: [],
  error: "",
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_BOOKING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        booking: action.payload,
        error: "",
      };
    case POST_BOOKING_FAILURE:
      return {
        ...state,
        loading: false,
        booking: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default bookingReducer;
