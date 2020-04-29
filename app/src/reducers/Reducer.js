import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "../actions/Actions";

const initialState = {
  characters: [],
  error: "",
  isFetching: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
}

export default reducer;
