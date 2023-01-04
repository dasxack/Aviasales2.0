import { CHECKBOX_All, CHECKBOX_OTHER } from './types';
const initialState = {
  checkboxes: [
    { id: 'All', checked: true, value: 'Все', numValue: -1 },
    { id: 'Without', checked: true, value: 'Без пересадок', numValue: 0 },
    { id: 'OneTransfer', checked: true, value: '1 пересадка', numValue: 1 },
    { id: 'TwoTransfer', checked: true, value: '2 пересадки', numValue: 2 },
    { id: 'ThreeTransfer', checked: true, value: '3 пересадки', numValue: 3 },
  ],
  paylood: {},
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKBOX_OTHER:
      return {
        ...state,
        checkboxes: state.checkboxes.map((el) => {
          if (el.id === action.paylood.id) {
            state.checkboxes[0].checked = false;
            el.checked = !el.checked;
            const res = state.checkboxes.filter((el) => el.id !== 'All' && el.checked);
            if (res.length === 4) {
              state.checkboxes[0].checked = true;
            }
          }

          return el;
        }),
        paylood: action.paylood,
        // отфильтровать чекбоксес и поменять нужное поле чекед
      };
    case CHECKBOX_All:
      return {
        ...state,
        checkboxes: state.checkboxes.map((el) => {
          if (action.paylood) {
            el.checked = true;
          }
          if (!action.paylood) {
            el.checked = false;
          }

          return el;
        }),
        paylood: action.paylood,
      };
    default:
      return state;
  }
};
