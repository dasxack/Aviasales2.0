import { LOADER_DISPAY_ON, LOADER_DISPAY_OFF } from './types';
const initialState = {
  loading: false,
};

export const loadReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER_DISPAY_ON:
      return {
        ...state,
        loading: true,
      };
    case LOADER_DISPAY_OFF:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
