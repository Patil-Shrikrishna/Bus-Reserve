import { combineReducers } from "redux";
import updateJourneyReducer from "./updateJourneyReducer";

const rootReducer = combineReducers({
  updateJourney: updateJourneyReducer,
});
export default rootReducer;
