import { UPDATE_JOURNEY_DETAILS } from "../actionTypes";

export const updateJourneyDetails = (details) => ({
  type: UPDATE_JOURNEY_DETAILS,
  payload: details,
});
