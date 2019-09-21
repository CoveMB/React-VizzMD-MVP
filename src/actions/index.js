import muscles from '../../data/muscles';

export function enterPatient(patient) {
  return {
    type: 'PATIENT_ENTERED',
    payload: patient
  };
}

export function SetMuscles() {
  return {
    type: 'SET_MUSCLE',
    payload: muscles
  };
}

export function resetMuscles() {
  return {
    type: 'SET_MUSCLE',
    payload: muscles
  };
}

export function enterMuscleForce() {
  // loop throught muscles to change force with arguments
  return {
    type: 'MUSCLE_FORCE_ENTERED',
    payload: muscles
  };
}
