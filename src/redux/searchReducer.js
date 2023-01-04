import { SEARCH_ID } from './types';
const initialState = {
  id: '',
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ID:
      return {
        ...state,
        id: action.id,
      };

    default:
      return state;
  }
};
