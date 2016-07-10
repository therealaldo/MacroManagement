/*
=============================================================================================

Array Changes w/o Mutations
-- Adding
-- Removing
-- Increment
-- Decrement

Object Changes w/o Mutations
-- Toggling

Reducers
-- Adding
-- Toggling
-- Reducer Composition

=============================================================================================
*/


/*
Array Changes w/o Mutations
=============================================================================================

Adding an item to an empty array
  list = [];
*/
const addItem = (list) => {
  return [...list, 0];
  // Result: list = [0];
};

/*
Removing an item from a populated array
  list = [0, 10, 20];
  index = 1;
*/
const removeItem = (list, index) => {
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ];
  // Result: list = [0, 20];
};

/*
Increment a specific item in the array
  list = [0, 10, 20];
  index = 1;
*/
const incrementItem = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ];
  // Result: list = [0, 11, 20];
};

/*
Decrement a specific item in the array
  list = [0, 10, 20];
  index = 1;
*/
const decrementItem = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index] - 1,
    ...list.slice(index + 1)
  ];
  // Result: list = [0, 9, 20];
};




/*
Object Changes w/o Mutations
=============================================================================================

Changing a key value in an object
  item = {
    id: 0,
    text: 'Apples',
    completed: false
  };

  Object.assign is a new method in ES6, not available everywhere
  Spread operator does the same thing
*/
const toggleItem = (item) => {
  return {
    ...item,
    completed: !item.completed
  });
  /*
  Result:
    item = {
      id: 0,
      text: 'Apples',
      completed: true
    };
  */
};




/*
Reducers
=============================================================================================

Adding an item to an array
  action = {
    type: 'ADD_ITEM',
    id: 0,
    text: 'Apples'
  };


Toggling a specific item in an array
  state = [
    {
      id: 0,
      text: 'Apples',
      completed: false
    },
    {
      id: 1,
      text: 'Bananas',
      completed: false
    }
  ];

  action = {
    type: 'TOGGLE_ITEM',
    id: 1
  }
*/

const item = (
  state,
  action
) => {
  switch (action.type) {
    case: 'ADD_ITEM':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_ITEM':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  };
};

const items = (
  state = [],
  action
) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        item(undefined, action);
      ];
    case: 'TOGGLE_ITEM':
      return state.map(i => item(i, action));
    default:
      return state;
  };
};

const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case: 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  };
};

/*
Reducer composition will create the initial store with the initial independent states and actions
combineReducers does this for you since it is so common
  const rootReducer = (
    state = {},
    action
  ) => {
    return {
      items: items(
        state.items,
        action
      ),
      visibilityFilter: visibilityFilter(
        state.visibilityFilter,
        action
      )
    };
  };
*/
const rootReducer = combineReducers({
  items,
  visibilityFilter
});
