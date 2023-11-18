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
    case "UPDATE_SOURCE_CITY":
      return {
        ...state,
        journeyDetails: {
          ...state.journeyDetails,
          sourceCity: action.payload,
        },
      };
    case "UPDATE_DESTINATION_CITY":
      return {
        ...state,
        journeyDetails: {
          ...state.journeyDetails,
          destinationCity: action.payload,
        },
      };
    case "UPDATE_TRAVEL_DATE":
      return {
        ...state,
        journeyDetails: {
          ...state.journeyDetails,
          selectedDate: action.payload,
        },
      };
    default:
      return state;
  }
};
export default updateJourneyReducer;
