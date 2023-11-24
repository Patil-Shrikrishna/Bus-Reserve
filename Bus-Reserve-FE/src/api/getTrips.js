import { fetchTripRequest } from "../redux/actions/trips/fetchTripRequest";
import { fetchTripSuccess } from "../redux/actions/trips/fetchTripSuccess";
import { fetchTripFailure } from "../redux/actions/trips/fetchTripFailure";
import axios from "axios";

function tripsObj(data) {
  const { trips, busDetails } = data;
  console.log("trips: ", trips);
  console.log("busdetails: ", busDetails);
  return {
    _id: trips[0]._id,
    busOwnerID: trips[0].busOwnerID,
    busAmenities: busDetails[0].busAmenities,
    busCategory: busDetails[0].busCategory,
    busFare: busDetails[0].busFare,
    busName: busDetails[0].busName,
    busNumber: busDetails[0].busNumber,
    busRating: busDetails[0].busRating,
    totalSeats: busDetails[0].totalSeats,
    totalWindowSeatsAvailable: busDetails[0].totalWindowSeatsAvailable,
    from: trips[0].from,
    to: trips[0].to,
    seatBooked: trips[0].seatBooked,
    startTime: trips[0].startTime,
    endTime: trips[0].endTime,
  };
}
const getTrips = (filter) => {
  return function (dispatch) {
    dispatch(fetchTripRequest());
    axios
      .get("http://localhost:3001/trip/search", {
        params: filter,
      })
      .then((response) => {
        const trips = response.data.map((trip) => trip); //call the data converter function here and pass trip as data to it.
        // const trips = response.data.map((trip) => tripsObj(trip)); //call the data converter function here and pass trip as data to it.
        dispatch(fetchTripSuccess(trips));
      })
      .catch((error) => {
        dispatch(fetchTripFailure(error.message));
      });
  };
};
export default getTrips;

//TODO:
// Create a function which will convert response into a proper format
