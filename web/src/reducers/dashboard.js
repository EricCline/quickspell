const initialState = {
  spells: [],
};

export default function dashboard(state=initialState, action) {

  switch (action.type) {
    case 'FETCH_SPELLS':
      return Object.assign({}, state, {
        spells: action.spells
      });
    default:
      return state;
  }
}
