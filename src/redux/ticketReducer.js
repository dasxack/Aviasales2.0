import { TICKET_LOAD, CHEAP_TICKETS, FAST_TICKETS, OPTIMAL_TICKETS } from './types';

import getTotalFlyDuration from '../utilites/getTotalFlyDuration';
const initialState = {
  ticket: [],
  stop: false,

  checkboxes: [],
};

export const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case TICKET_LOAD:
      return {
        ...state,
        ticket: [...state.ticket, ...action.data],
        stop: action.stop,

        checkboxes: action.checkboxes,
      };
    case CHEAP_TICKETS:
      return {
        ...state,
        ticket: [...state.ticket.sort((previous, next) => (previous.price > next.price ? 1 : -1))],
      };
    case FAST_TICKETS:
      return {
        ...state,
        ticket: [
          ...state.ticket.sort((previous, next) =>
            getTotalFlyDuration(previous) > getTotalFlyDuration(next) ? 1 : -1
          ),
        ],
      };
    case OPTIMAL_TICKETS:
      return {
        ...state,
        ticket: [
          ...state.ticket.sort((previous, next) =>
            getTotalFlyDuration(previous) + previous.price > getTotalFlyDuration(next) + next.price ? 1 : -1
          ),
        ],
      };

    default:
      return state;
  }
};
