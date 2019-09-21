import { combineReducers } from 'redux';
import PatientReducer from './patient_reducer';
import MusclesReducer from './muscles_reducer';

// State and reducers
const rootReducer = combineReducers({
  patient: PatientReducer,
  muscles: MusclesReducer
});

export default rootReducer;
