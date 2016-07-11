'use strict';

const initialState = {
  groceryLists: [],
  entities: {
    lists: {},
    ingredients: {},
  }
};

export default reducer = (
  state = initialState,
  action = {}
) => {
  switch (action.type) {
    case 'NEW_EMPTY_LIST':
      return {
        ...state,
        groceryLists: action.groceryLists
      };
    default:
      return state;
  }
};
