const initialState = {
  journeyDetails: {
    sourceCity: "",
    destinationCity: "",
    selectedDate: "",
  },
};

const updateJourneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_JOURNEY_DETAILS":
      return {
        ...state,
        journeyDetails: {
          ...state.journeyDetails,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
export default updateJourneyReducer;
