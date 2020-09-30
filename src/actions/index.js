import {
  NEW_QUOTE,
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../constants";

export const newQuote = () => ({
  type: NEW_QUOTE,
});

export const getData = () => ({
  type: FETCH_DATA,
});

export const getDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  data,
});

export const getDataFailure = (err) => ({
  type: FETCH_DATA_FAILURE,
  err,
});

export const fetchQuotes = () => (dispatch) => {
  dispatch(getData());
  fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then(
      (quotes) => {
        dispatch(getDataSuccess(quotes));
        console.log("success");
        console.log(quotes);
      },
      (err) => dispatch(getDataFailure(err))
    );
};
