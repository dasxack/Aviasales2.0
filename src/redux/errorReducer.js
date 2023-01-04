import { ERROR_OFF, ERROR_ON } from './types';
const initialState = {
  error: false,
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_ON:
      return {
        ...state,
        error: true,
      };
    case ERROR_OFF:
      return {
        ...state,
        error: false,
      };

    default:
      return state;
  }
};
