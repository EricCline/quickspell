import { combineReducers } from 'redux';
import dashboard from "./dashboard";
import filterForm from "./filterForm";

const quickSpellApp = combineReducers({
  dashboard,
  filterForm,
})

export default quickSpellApp;
