import { FETCH_CLIENTS, ADD_CLIENTS, DELETE_CLIENTS } from "../actionTypes";

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
    case ADD_CLIENTS:
      return {
        ...state,
        clients: action.payload,
      }
    case DELETE_CLIENTS:
      return {
        ...state,
      }
    default:
      return state;
  }
};

export default clientReducers;
