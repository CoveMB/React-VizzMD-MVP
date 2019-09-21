import muscles from '../../data/muscles';

export function enterPatient(patient) {
  return {
    type: 'PATIENT_ENTERED',
    payload: patient
  };
}

export function setBodyFace() {
  return {
    type: 'SET_BODY_FACE',
    payload: "face"
  };
}

export function setBodyBack() {
  return {
    type: 'SET_BODY_BACK',
    payload: "back"
  };
}

export function setMuscles() {
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
