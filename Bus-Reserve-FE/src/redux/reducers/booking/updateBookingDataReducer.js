import {
  UPDATE_BOOKING_DATA,
  UPDATE_PASSENGER_DATA,
} from "../../actions/actionTypes";

const initialState = {
  booking: {},
};

const updateBookingDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BOOKING_DATA:
      return {
        ...state,
        booking: {
          ...action.payload,
        },
      };
    case UPDATE_PASSENGER_DATA:
      return {
        ...state,
        booking: {
          ...state.booking,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default updateBookingDataReducer;
