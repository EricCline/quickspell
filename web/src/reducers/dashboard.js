const initialState = {
  spells: [],
  selectedSpells: []
};

export default function dashboard(state=initialState, action) {

  switch (action.type) {
    case 'FETCH_SPELLS':
      return Object.assign({}, state, {
        spells: action.spells
      });
    case 'SELECT_SPELL':
      var index = state.selectedSpells.indexOf(action.spell);
      if (index === -1) {
        return Object.assign({}, state, {
          selectedSpells: [
            ...state.selectedSpells,
            action.spell
          ]
        });
      }
      return state;
    case 'REMOVE_SPELL':
      var index = state.selectedSpells.indexOf(action.spell);
      if (index > -1) {
        return Object.assign({}, state, {
          selectedSpells: [
            ...state.selectedSpells.slice(0, index),
            ...state.selectedSpells.slice(index + 1)
          ]
        });
      }
      return state;
    default:
      return state;
  }
}
