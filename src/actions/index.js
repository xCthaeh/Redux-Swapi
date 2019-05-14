import axios from "axios";

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const fetchChars = () => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        dispatch({ type: SUCCESS, payload: response.data.results });
      })
      .catch(err => {
        dispatch({ type: FAILURE, payload: err });
      });
  };
};
