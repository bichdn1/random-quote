import { combineReducers } from "redux";
import fetchData from "./fetchData";
import newQuote from "./newQuote";

const rootReducer = combineReducers({
  fetchData,
  newQuote,
});

export default rootReducer;
