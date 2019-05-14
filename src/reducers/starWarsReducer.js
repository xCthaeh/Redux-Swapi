import { FETCHING, SUCCESS, FAILURE } from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: []
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetching: true };

    case SUCCESS:
      return { ...state, characters: [...action.payload], fetching: false };

    case FAILURE:
      return { ...state, error: [action.payload] };

    default:
      return state;
  }
};
