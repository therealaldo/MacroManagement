' use strict';

const initialState = {
  scene: {},
};

export default reducer = (
  state = initialState,
  action = {}
) => {
  switch(action.type) {
    case 'focus':
      if(action.scene.index) {
        return {
          ...state,
          scene: action.scene.children[action.scene.index],
        };
      };
      return {
        ...state,
        scene: action.scene,
      };

    default:
      return state;
  }
}
