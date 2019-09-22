import muscles from '../../data/muscles';

export function enterPatient(patient) {
  return {
    type: 'PATIENT_ENTERED',
    payload: patient
  };
}

export function flipBody(face) {
  return {
    type: 'FLIP_BODY',
    payload: face
  };
}

export function selectMuscle(muscleName) {
  return {
    type: 'MUSCLE_SELECTED',
    payload: muscleName
  };
}

export function enterMuscleForce() {
  // loop throught muscles to change force with arguments
  return {
    type: 'MUSCLE_FORCE_ENTERED',
    payload: muscles
  };
}
