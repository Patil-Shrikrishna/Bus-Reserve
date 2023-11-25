import { combineReducers } from "redux";
import updateJourneyReducer from "./journey/updateJourneyReducer";
import tripsReducer from "./trips/tripsReducer";
import updateBookingDataReducer from "./booking/updateBookingDataReducer";
const rootReducer = combineReducers({
  updateJourney: updateJourneyReducer,
  trips: tripsReducer,
  updateBooking: updateBookingDataReducer,
});
export default rootReducer;
// export default (state, action) => {
//   // Handle undefined state here to prevent the warning
//   if (action.type === "@@redux/INIT") {
//     return rootReducer(undefined, {});
//   }

//   return rootReducer(state, action);
// };
