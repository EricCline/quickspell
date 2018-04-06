const initialState = {
  spells: [],
  classname: "",
  level: "",
};

export default function dashboard(state=initialState, action) {

  switch (action.type) {
    case 'FETCH_SPELLS':
      return Object.assign({}, state, {
        spells: action.spells
      });
    case 'UPDATE_CLASSNAME':
      return Object.assign({}, state, {
        classname: action.classname
      });
    case 'UPDATE_LEVEL':
      return Object.assign({}, state, {
        level: action.level
      });
    default:
      return state;
  }
}
