import { produce } from "immer";

const initialState = {
  banner: [],
  movie: {},
};

function bookingReducer(state = initialState, action) {
  const { type, payload } = action;

  return produce(state, (draft) => {
    switch (type) {
      case "SET_BANNER":
        draft.banner = payload;
        break;
      case "SET_MOVIE":
        draft.movie = payload;
        break;
      default:
        return draft;
    }
  });
}

export default bookingReducer;
