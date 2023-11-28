import { GET_CITIES_REQUEST } from "../../actions/actionTypes";
import { GET_CITIES_SUCCESS } from "../../actions/actionTypes";
import { GET_CITIES_FAILURE } from "../../actions/actionTypes";

const initialState = {
  loading: false,
  cities: [],
  error: "",
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_CITIES_SUCCESS:
      return {
        ...state,
        loading: false,
        cities: action.payload,
        error: "",
      };
    case GET_CITIES_FAILURE:
      return {
        ...state,
        loading: false,
        cities: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default citiesReducer;
