import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../constants";

const initialState = {
  index: 0,
  quotes: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isLoading: true,
        quotes: [],
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        quotes: action.data,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.err,
      };
    default:
      return state;
  }
};

export default reducer;
