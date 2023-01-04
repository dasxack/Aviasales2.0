import { SLICE_TICKET } from './types';
const initialState = {
  sliceNum: 5,
};

export const sliceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SLICE_TICKET:
      return {
        ...state,
        sliceNum: (state.sliceNum += 5),
      };

    default:
      return state;
  }
};
