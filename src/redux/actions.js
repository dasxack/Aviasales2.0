import {
  CHECKBOX_All,
  CHECKBOX_OTHER,
  TICKET_LOAD,
  LOADER_DISPAY_ON,
  LOADER_DISPAY_OFF,
  SLICE_TICKET,
  SEARCH_ID,
  CHEAP_TICKETS,
  FAST_TICKETS,
  OPTIMAL_TICKETS,
  ERROR_OFF,
  ERROR_ON,
} from './types';

export function checkboxOtherFilter(e) {
  return {
    type: CHECKBOX_OTHER,
    paylood: {
      id: e.target.id,
      isChecked: e.target.checked,
    },
  };
}
export function checkboxAllFilter(e) {
  return {
    type: CHECKBOX_All,
    paylood: e.target.checked,
  };
}
export function loaderOn() {
  return {
    type: LOADER_DISPAY_ON,
  };
}
export function loaderOff() {
  return {
    type: LOADER_DISPAY_OFF,
  };
}
export function sliceTicket() {
  return {
    type: SLICE_TICKET,
  };
}
export function cheapTickets() {
  return {
    type: CHEAP_TICKETS,
  };
}
export function fastTickets() {
  return {
    type: FAST_TICKETS,
  };
}
export function optimalTickets() {
  return {
    type: OPTIMAL_TICKETS,
  };
}
export function errorOn() {
  return {
    type: ERROR_ON,
  };
}
export function errorOff() {
  return {
    type: ERROR_OFF,
  };
}
export function getSearchId() {
  return async (dispatch) => {
    dispatch(loaderOn());

    try {
      const search = await fetch('https://aviasales-test-api.kata.academy/search');
      const jsonData = await search.json();
      dispatch(errorOff());
      dispatch({
        type: SEARCH_ID,
        id: jsonData.searchId,
      });
    } catch (err) {
      dispatch(loaderOff());
      dispatch(errorOn());
    }
  };
}

export function getTickets(id, checked) {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`);
      if (response.status === 500) {
        throw new Error('500');
      }
      dispatch(errorOff());
      const res = await response.json();

      dispatch({
        type: TICKET_LOAD,
        data: res.tickets,
        stop: res.stop,
        checkboxes: checked,
      });
      if (res.stop) {
        dispatch(loaderOff());
      }
    } catch (err) {
      if (err.message === '500') {
        dispatch({
          type: TICKET_LOAD,
          data: [],
        });
      } else {
        dispatch(loaderOff());
        dispatch(errorOn());
      }
    }
  };
}

// export function takeTicket() {
//   return async (dispatch) => {
//     dispatch(loaderOn())
//     try {
//       const search = await fetch(
//         'https://aviasales-test-api.kata.academy/search'
//       )
//       const jsonData = await search.json()
//       const response = await fetch(
//         `https://aviasales-test-api.kata.academy/tickets?searchId=${jsonData.searchId}`
//       )
//       const res = await response.json()

//       dispatch({
//         type: TICKET_LOAD,
//         data: res.tickets,
//       })
//       dispatch(loaderOff())
//     } catch (err) {}
//   }
// }
