import { combineReducers } from 'redux';
import PatientReducer from './patient_reducer';
import MusclesReducer from './muscles_reducer';
import MuscleReducer from './muscle_reducer';
import BodyReducer from './body_reducer';
import PrintReducer from './print_reducer';

// State and reducers
const rootReducer = combineReducers({
  patient: PatientReducer,
  muscles: MusclesReducer,
  selectedMuscle: MuscleReducer,
  body: BodyReducer,
  printing: PrintReducer
});

export default rootReducer;
