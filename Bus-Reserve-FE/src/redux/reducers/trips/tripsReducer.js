import { FETCH_TRIPS_REQUEST } from "../../actions/actionTypes";
import { FETCH_TRIPS_SUCCESS } from "../../actions/actionTypes";
import { FETCH_TRIPS_FAILURE } from "../../actions/actionTypes";

const initialState = {
  loading: false,
  trips: [],
  error: "",
};

const tripsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRIPS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TRIPS_SUCCESS:
      return {
        ...state,
        loading: false,
        trips: action.payload,
        error: "",
      };
    case FETCH_TRIPS_FAILURE:
      return {
        ...state,
        loading: false,
        trips: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default tripsReducer;
