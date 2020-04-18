import { ADD_LOCATION } from "./actions";
import Location from "../../models/Location";

const initialState = {
  locations: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOCATION:
      const newLocation = new Location(
        new Date().toString(),
        action.locationData.title
      );
      return {
        locations: state.locations.concat(newLocation),
      };

    default:
      return state;
  }
};
