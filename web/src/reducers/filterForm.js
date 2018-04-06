const initialState = {
  classname: "",
  level: "",
};

export default function filterForm(state=initialState, action) {

  switch (action.type) {
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
