import { combineReducers } from "redux";
import updateJourneyReducer from "./journey/updateJourneyReducer";
import tripsReducer from "./trips/tripsReducer";
import updateBookingDataReducer from "./bookingData/updateBookingDataReducer";
import bookingReducer from "./booking/bookingReducer";
const rootReducer = combineReducers({
  updateJourney: updateJourneyReducer,
  trips: tripsReducer,
  updateBooking: updateBookingDataReducer,
  booking: bookingReducer,
});
export default rootReducer;
