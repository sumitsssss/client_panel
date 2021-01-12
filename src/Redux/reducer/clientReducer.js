import { FETCH_CLIENTS } from "../actionTypes";

const initialState = {
  clients: [],
};

const clientReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLIENTS:
      return {
        ...state,
        clients: action.payload,
      };
    default:
      return state;
  }
};

export default clientReducers;
